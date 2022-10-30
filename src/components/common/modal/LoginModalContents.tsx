import styled from '@emotion/styled';
import { GithubIcon } from 'assets/icons';
import { useDarkMode } from 'hooks/useDarkMode';

interface LoginModalContentsProps {
  clickBtn?: () => void;
}

const LoginModalContents = ({ clickBtn }: LoginModalContentsProps) => {
  const { theme, isDarkMode } = useDarkMode();

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
            <div style={{ flexGrow: 1 }}>이용약관 및 개인정보처리방침 동의</div>
            <a
              href="https://poapper.com"
              style={{ textDecoration: 'underline', color: theme.colors.TEXT_HIGH }}
            >
              보기
            </a>
          </div>
          <Button theme={theme} style={{ background: theme.colors.GRAY_5 }} onClick={clickBtn}>
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

export default LoginModalContents;
