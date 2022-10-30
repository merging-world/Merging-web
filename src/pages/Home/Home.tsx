import styled from '@emotion/styled';
import React from 'react';
import { CreatePost, Navbar, PopularPosts } from 'components/common';
import { useDarkMode } from 'hooks/useDarkMode';

const Home = () => {
  const { theme } = useDarkMode();

  return (
    <div>
      <Navbar />
      <div style={{ margin: '86px auto 0 auto', maxWidth: '1040px' }}>
        <div style={{ display: 'flex', padding: '0 16px', gap: '16px' }}>
          <MainSection theme={theme}>
            <CreatePost />
          </MainSection>
          <SideSection theme={theme}>
            <PopularPosts />
          </SideSection>
        </div>
        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  );
};

export default Home;

const MainSection = styled.div`
  flex-grow: 6;
`;

const SideSection = styled.div`
  flex-grow: 4;
  ${props => props.theme.breakPoint.small} {
    display: none;
  }
`;
