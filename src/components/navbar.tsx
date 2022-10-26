import styled from '@emotion/styled';
import AlarmIcon from '../icons/AlarmIcon';
import CommunityIcon from '../icons/CommunityIcon';
import MarketIcon from '../icons/MarketIcon';
import PencilIcon from '../icons/PencilIcon';
import SearchIcon from '../icons/SearchIcon';
import SettingIcon from '../icons/SettingIcon';
import { useDarkMode } from 'hooks/useDarkMode';

export const Navbar = () => {
  const { theme, toggleTheme, isDarkMode } = useDarkMode();
  return (
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
          <ProfileCircle alt="profile" src="https://github.com/Park-Wonbin.png" />
        </div>
      </div>
    </div>
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

const ProfileCircle = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 17px;
`;
