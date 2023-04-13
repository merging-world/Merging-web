import styled from '@emotion/styled';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { CheckRectangleIcon, GithubIcon } from 'assets/icons';
import { authState } from 'atoms/auth';
import { checkBoxStates } from 'atoms/index';
import { firebaseAuth } from 'constants/firebase';
import { useDarkMode } from 'hooks/useDarkMode';
import { checkAndRegister } from 'utils/apis';

interface LoginModalContentsProps {
  closed: () => void;
}

const LoginModalContents = ({ closed }: LoginModalContentsProps) => {
  const { theme, isDarkMode } = useDarkMode();
  const [checked, setIsChecked] = useRecoilState(checkBoxStates);
  const [auth, setAuth] = useRecoilState(authState);

  const login = () => {
    signInWithPopup(firebaseAuth, new GithubAuthProvider())
      .then(async result => {
        const { user } = result;
        const accessToken = await user.getIdToken();
        const res = await checkAndRegister(accessToken);
        res.nickname
          ? setAuth({
              accessToken: accessToken,
              isValid: true,
              user: {
                uuid: res.uuid,
                nickname: res.nickname,
                githubName: res.githubName,
                intro: res.intro,
              },
            })
          : setAuth({
              accessToken: accessToken,
              isValid: false,
              user: {
                uuid: res.uuid,
                nickname: null,
                githubName: res.githubName,
                intro: res.intro,
              },
            });
        closed();
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <SignUpModal theme={theme}>
      <ModalLayout>
        <ModalContent>
          <img
            alt="merging"
            src={isDarkMode ? '/assets/logo-dark.svg' : '/assets/logo-light.svg'}
            style={{ height: '20px', marginBottom: '16px' }}
          />
          <ContentTitle>
            머징에 오신 것을 환영해요
            <br />
            깃허브를 통해 로그인해주세요
          </ContentTitle>
        </ModalContent>
        <ModalContent>
          <TermWrap theme={theme}>
            <AgreeBox
              onClick={() => {
                if (checked.status) setIsChecked({ type: 'unchecked', status: false });
                else setIsChecked({ type: 'checked', status: true });
              }}
            >
              <CheckRectangleIcon
                color={checked.status ? theme.colors.PRIMARY : theme.colors.GRAY_2}
                width={20}
                height={20}
              />
              <p>이용약관 및 개인정보처리방침 동의</p>
            </AgreeBox>
            <Term theme={theme} href="https://api.merging.world/terms">
              보기
            </Term>
          </TermWrap>
          <Button
            theme={theme}
            style={{ background: checked.status ? theme.colors.GRAY_5 : theme.colors.GRAY_2 }}
            onClick={() => {
              if (checked.status) login();
            }}
          >
            <GithubIcon color={theme.colors.BACKGROUND_SECONDARY} width={20} height={20} />
            Log in with Github
          </Button>
        </ModalContent>
      </ModalLayout>
    </SignUpModal>
  );
};

const SignUpModal = styled.ul`
  width: 100%;
  max-width: 500px;
  min-height: 400px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  margin: 32px;
`;

const ModalLayout = styled.ul`
  height: calc(100% - 64px);
  align-items: start;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ModalContent = styled.li`
  width: 100%;
`;

const ContentTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.FONT_H2};
  line-height: 1.5em;
  font-weight: bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const Button = styled.button`
  width: 100%;
  height: 52px;
  border-radius: 14px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  &:hover {
    cursor: pointer;
  }
  gap: 8px;
`;

const TermWrap = styled.ul`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const AgreeBox = styled.li`
  align-items: center;
  display: flex;
  &:hover {
    cursor: pointer;
  }
  gap: 8px;
`;

const Term = styled.a`
  text-decoration: underline;
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

export default LoginModalContents;
