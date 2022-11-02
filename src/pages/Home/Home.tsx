import styled from '@emotion/styled';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import { CreatePost, Navbar, PopularPosts } from 'components/common';
import PopularTags from 'components/common/PopularTags';
import PostCardContainer from 'components/postCard/PostCardContainer';
import { useDarkMode } from 'hooks/useDarkMode';

const Home = () => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  return (
    <div>
      <Navbar />
      <div style={{ margin: '86px auto 0 auto', maxWidth: '1040px' }}>
        <div style={{ display: 'flex', padding: '0 16px', gap: '16px' }}>
          <MainSection theme={theme}>
            {auth.isValid && <CreatePost />}
            <PostCardContainer />
          </MainSection>
          <SideSection theme={theme}>
            <PopularPosts />
            <PopularTags />
          </SideSection>
        </div>
        <div style={{ height: '100px' }}></div>
      </div>
    </div>
  );
};

export default Home;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
  gap: 16px;
`;

export const SideSection = styled.aside`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  max-width: 360px;
  min-width: 260px;
  gap: 16px;
  ${props => props.theme.breakPoint.small} {
    display: none;
  }
`;
