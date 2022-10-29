import styled from '@emotion/styled';
import { signInWithPopup, GithubAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import AlarmIcon from '../assets/icons/AlarmIcon';
import CommunityIcon from '../assets/icons/CommunityIcon';
import GithubIcon from '../assets/icons/GithubIcon';
import MarketIcon from '../assets/icons/MarketIcon';
import PencilIcon from '../assets/icons/PencilIcon';
import SearchIcon from '../assets/icons/SearchIcon';
import SettingIcon from '../assets/icons/SettingIcon';
import { authState } from '../atoms/auth';
import { firebaseAuth } from '../firebase';
import { useDarkMode } from 'hooks/useDarkMode';
import { checkAndRegister } from 'utils/apis';

export const Navbar = () => {
  const { theme, toggleTheme, isDarkMode } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);
  const [open, setOpen] = useState(false);

  const login = () => {
    signInWithPopup(firebaseAuth, new GithubAuthProvider())
      .then(async result => {
        const { user } = result;
        const accessToken = await user.getIdToken();
        const res = await checkAndRegister(accessToken);
        if (res) {
          if (res.nickname) {
            setAuth({
              accessToken: accessToken,
              isValid: true,
              user: {
                uuid: res.uuid,
                nickname: res.nickname,
                githubName: res.githubName,
              },
            });
          } else {
            // 첫 로그인
            setAuth({
              accessToken: accessToken,
              isValid: false,
              user: {
                uuid: res.uuid,
                nickname: null,
                githubName: res.githubName,
              },
            });
          }
        }
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      {open && (
        <Modal onClick={() => setOpen(false)}>
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
                <Button theme={theme} style={{ background: theme.colors.GRAY_5 }} onClick={login}>
                  <GithubIcon color={theme.colors.BACKGROUND_SECONDARY} width={20} height={20} />
                  Log in with Github
                </Button>
              </div>
            </div>
          </SignUpModal>
        </Modal>
      )}
      {auth.user != null && auth.user.nickname == null && (
        <Modal>
          <SignUpModal theme={theme}>
            <p>
              회원가입
              <br />
              깃허브를 통해 로그인해주세요
            </p>
          </SignUpModal>
        </Modal>
      )}
      <div
        style={{
          position: 'fixed',
          top: 0,
          background: `${theme.colors.BACKGROUND_SECONDARY}AA`,
          width: '100%',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
      >
        <div
          style={{
            margin: '0 auto',
            maxWidth: '1040px',
            height: '64px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
            {/* Logo */}
            <Logo theme={theme} onClick={() => (window.location.href = '/')}>
              <img
                className="desktop"
                alt="merging"
                src={isDarkMode ? '/assets/logo-dark.svg' : '/assets/logo-light.svg'}
                style={{ height: '20px', marginRight: '32px' }}
              />
              <img
                className="mobile"
                alt="merging"
                src={'/assets/icon.svg'}
                style={{ height: '20px', marginRight: '32px' }}
              />
            </Logo>
            {/* Search Bar */}
            <SearchBar theme={theme}>
              <SearchIcon color={theme.colors.GRAY_2} width={20} height={20} />
              <input placeholder="검색어를 입력해주세요" />
            </SearchBar>
            {/* Tab Icons */}
            <TabButton theme={theme} style={{ marginRight: '16px' }} color={theme.colors.PRIMARY}>
              <CommunityIcon color={theme.colors.PRIMARY} width={20} height={20} />
              <p>커뮤니티</p>
            </TabButton>
            <TabButton theme={theme} color={theme.colors.GRAY_2}>
              <MarketIcon color={theme.colors.GRAY_2} width={20} height={20} />
              <p>마켓</p>
            </TabButton>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', padding: '0 16px' }}>
            {/* Icon Buttons */}
            <SearchIconButton theme={theme}>
              <SearchIcon color={theme.colors.GRAY_2} width={24} height={24} />
            </SearchIconButton>

            {auth.isValid ? (
              <>
                <IconButton
                  onClick={() => {
                    toggleTheme();
                  }}
                >
                  <SettingIcon color={theme.colors.GRAY_2} width={24} height={24} />
                </IconButton>
                <IconButton>
                  <PencilIcon color={theme.colors.GRAY_2} width={24} height={24} />
                </IconButton>
                <IconButton>
                  <AlarmIcon color={theme.colors.GRAY_2} width={24} height={24} />
                </IconButton>
                <ProfileCircle
                  alt="profile"
                  src={`https://github.com/${auth.user?.githubName}.png`}
                  onClick={() => {
                    console.log(auth.accessToken);
                  }}
                />
              </>
            ) : (
              <>
                <LoginButton theme={theme} onClick={() => setOpen(true)}>
                  로그인
                </LoginButton>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const Logo = styled.div`
  .mobile {
    display: none;
    ${props => props.theme.breakPoint.small} {
      display: block;
    }
  }
  .desktop {
    display: block;
    ${props => props.theme.breakPoint.small} {
      display: none;
    }
  }
  &:hover {
    cursor: pointer;
  }
`;

const LoginButton = styled.div`
  width: 100px;
  height: 34px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.colors.PRIMARY};
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  &:hover {
    cursor: pointer;
  }
`;

const TabButton = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.color};
  > p {
    font-size: ${props => props.theme.fontSize.FONT_BODY1};
    font-weight: bold;
    margin-left: 8px;
  }
  ${props => props.theme.breakPoint.small} {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const IconButton = styled.div`
  margin-right: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const SearchIconButton = styled.div`
  margin-right: 16px;
  &:hover {
    cursor: pointer;
  }
  ${props => props.theme.breakPoint.large} {
    display: none;
  }
  ${props => props.theme.breakPoint.xLarge} {
    display: none;
  }
`;

const SearchBar = styled.div`
  width: 300px;
  height: 34px;
  border-radius: 17px;
  padding: 0 16px;
  margin-right: 32px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.GRAY_1};
  > input {
    font-size: ${props => props.theme.fontSize.FONT_BODY2};
    color: ${props => props.theme.colors.TEXT_MEDIUM};
    outline: none;
    width: 100%;
    margin-left: 8px;
    background: transparent;
    border: none;
  }
  ${props => props.theme.breakPoint.small} {
    display: none;
  }
  ${props => props.theme.breakPoint.medium} {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 17px;
`;

export const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
`;

const SignUpModal = styled.div`
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
