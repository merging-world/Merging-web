import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import {
  AlarmIcon,
  CommunityIcon,
  MarketIcon,
  PencilIcon,
  SearchIcon,
  SettingIcon,
} from 'assets/icons';
import AlarmNewIcon from 'assets/icons/AlarmNewIcon';
import { authState } from 'atoms/auth';
import LoginModalContents from 'components/common/modal/LoginModalContents';
import Modal from 'components/common/modal/Modal';
import NicknameModalContents from 'components/common/modal/NicknameModalContents';
import AlertModal from 'components/common/notification/AlertModal';
import Profile from 'components/layouts/Profile';
import { useDarkMode } from 'hooks/useDarkMode';
import { getNotificationsCount } from 'utils/apis';

const Navbar = () => {
  const { theme, toggleTheme, isDarkMode } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);
  const [open, setOpen] = useState(false);
  const [notification, setNotification] = useState({ open: false, unread: 0 });

  const getData = async () => {
    setNotification({ open: false, unread: await getNotificationsCount(auth.accessToken ?? '') });
  };

  useEffect(() => {
    getData();
  }, []);

  const notificationIconClicked = () => {
    setNotification({ open: !notification.open, unread: 0 });
  };

  return (
    <>
      {open && (
        <Modal>
          <LoginModalContents
            closed={() => {
              setOpen(false);
            }}
          />
        </Modal>
      )}
      {auth.user != null && auth.user.nickname == null && (
        <Modal>
          <NicknameModalContents />
        </Modal>
      )}
      {notification.open && <AlertModal />}
      <Container>
        <Wrap>
          <NavContentsLeft>
            <Logo theme={theme} onClick={() => (window.location.href = '/')}>
              <li>
                <img
                  className="desktop"
                  alt="merging"
                  src={isDarkMode ? '/assets/logo-dark.svg' : '/assets/logo-light.svg'}
                  style={{ height: '20px', marginRight: '32px' }}
                />
              </li>
              <li>
                <img
                  className="mobile"
                  alt="merging"
                  src={'/assets/icon.svg'}
                  style={{ height: '20px', marginRight: '32px' }}
                />
              </li>
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
          </NavContentsLeft>
          <NavContentsRight>
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
                <IconButton onClick={notificationIconClicked}>
                  {notification.unread > 0 ? (
                    <AlarmNewIcon color={theme.colors.GRAY_2} width={24} height={24} />
                  ) : (
                    <AlarmIcon color={theme.colors.GRAY_2} width={24} height={24} />
                  )}
                </IconButton>
                <Link to={'/profile'}>
                  <Profile
                    info="profile"
                    url={`https://github.com/${auth.user?.githubName}.png`}
                    clickProfile={() => {
                      console.log(auth.accessToken);
                    }}
                  />
                </Link>
              </>
            ) : (
              <>
                <LoginButton theme={theme} onClick={() => setOpen(true)}>
                  로그인
                </LoginButton>
              </>
            )}
          </NavContentsRight>
        </Wrap>
      </Container>
    </>
  );
};

const Container = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY}AA;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
`;

const Wrap = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1040px;
  height: 64px;
  margin: 0 auto;
`;

const NavContentsLeft = styled.ul`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const NavContentsRight = styled.ul`
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const Logo = styled.ul`
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

const LoginButton = styled.li`
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

const TabButton = styled.li`
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

const IconButton = styled.li`
  margin-right: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const SearchIconButton = styled.li`
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

const SearchBar = styled.li`
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

export default Navbar;
