import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import { CreatePost, Navbar, PopularPosts } from 'components/common';
import CommitCalendar from 'components/profile/CommitCalendar';
import CommitCard from 'components/profile/CommitCard';
import TreeCard from 'components/profile/TreeCard';
import { useDarkMode } from 'hooks/useDarkMode';
import { MainSection, SideSection } from 'pages/Home/Home';

const ProfilePage = () => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  return (
    <div>
      <Navbar />
      <div style={{ margin: '86px auto 0 auto', maxWidth: '1040px' }}>
        <div style={{ display: 'flex', padding: '0 16px', gap: '16px' }}>
          <MainSection theme={theme}></MainSection>
          <SideSection theme={theme}>
            <TreeCard />
            <CommitCard />
            <CommitCalendar />
          </SideSection>
        </div>
        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  );
};

export default ProfilePage;
