import styled from '@emotion/styled';
import { GithubAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRecoilState } from 'recoil';
import { checkBoxStates } from '../../../atoms';
import { authState } from '../../../atoms/auth';
import { CheckRectangleIcon, GithubIcon } from 'assets/icons';
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
              },
            })
          : setAuth({
              accessToken: accessToken,
              isValid: false,
              user: {
                uuid: res.uuid,
                nickname: null,
                githubName: res.githubName,
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
      <div>
        <div>
          <img
            alt="merging"
            src={isDarkMode ? '/assets/logo-dark.svg' : '/assets/logo-light.svg'}
            style={{ height: '20px', marginBottom: '16px' }}
          />
          <p>
            머징에 오신 것을 환영해요
            <br />
            깃허브를 통해 로그인해주세요
          </p>
        </div>
        <div>
          <div
            style={{
              padding: '16px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontSize: theme.fontSize.FONT_BODY2,
              color: theme.colors.TEXT_HIGH,
            }}
          >
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
              <div>이용약관 및 개인정보처리방침 동의</div>
            </AgreeBox>
            <a
              href="https://poapper.com"
              style={{ textDecoration: 'underline', color: theme.colors.TEXT_HIGH }}
            >
              보기
            </a>
          </div>
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
        </div>
      </div>
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
  > div {
    height: calc(100% - 64px);
    align-items: start;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  > div > div {
    width: 100%;
  }
  > div > div > p {
    color: ${props => props.theme.colors.TEXT_HIGH};
    font-size: ${props => props.theme.fontSize.FONT_H2};
    font-weight: bold;
    line-height: 1.5em;
  }
`;

const Button = styled.div`
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

const AgreeBox = styled.div`
  align-items: center;
  display: flex;
  &:hover {
    cursor: pointer;
  }
  gap: 8px;
`;
export default LoginModalContents;
