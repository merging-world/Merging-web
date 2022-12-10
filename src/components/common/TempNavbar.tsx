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
import { authState } from 'atoms/auth';
import LoginModalContents from 'components/common/modal/LoginModalContents';
import Modal from 'components/common/modal/Modal';
import NicknameModalContents from 'components/common/modal/NicknameModalContents';
import Profile from 'components/layouts/Profile';
import { useDarkMode } from 'hooks/useDarkMode';

const TempNavbar = () => {
  const { theme, toggleTheme, isDarkMode } = useDarkMode();

  function checkMobile() {
    const varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
    if (varUA.indexOf('android') > -1) {
      return 'android';
    } else if (
      varUA.indexOf('iphone') > -1 ||
      varUA.indexOf('ipad') > -1 ||
      varUA.indexOf('ipod') > -1
    ) {
      return 'ios';
    } else {
      return 'other';
    }
  }

  return (
    <>
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
          </NavContentsLeft>
          <NavContentsRight>
            {checkMobile() == 'android' ? (
              <LoginButton
                theme={theme}
                onClick={() =>
                  (window.location.href =
                    'https://play.google.com/store/apps/details?id=com.poapper.merging')
                }
              >
                다운로드
              </LoginButton>
            ) : (
              <LoginButton
                theme={theme}
                onClick={() =>
                  (window.location.href = 'https://apps.apple.com/kr/app/merging/id6444030377')
                }
              >
                다운로드
              </LoginButton>
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
  width: 120px;
  height: 34px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  font-weight: bold;
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

export default TempNavbar;
