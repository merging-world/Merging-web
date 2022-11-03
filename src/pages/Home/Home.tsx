import React from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import { CreatePost, Navbar } from 'components/common';
import Container, { MainSection, Sections, SideSection } from 'components/layouts/Container';
import PopularPosts from 'components/popularPost/PopularPosts';
import PopularTags from 'components/popularTag/PopularTags';
import PostCardContainer from 'components/postCard/PostCardContainer';
import { useDarkMode } from 'hooks/useDarkMode';

const Home = () => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  return (
    <>
      <Navbar />
      <Container>
        <Sections>
          <MainSection theme={theme}>
            {auth.isValid && <CreatePost />}
            <PostCardContainer />
          </MainSection>
          <SideSection theme={theme}>
            <PopularPosts />
            <PopularTags />
          </SideSection>
        </Sections>
        <div style={{ height: '100px' }}></div>
      </Container>
    </>
  );
};

export default Home;
