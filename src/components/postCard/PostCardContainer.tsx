import styled from '@emotion/styled';
// TODO : index 절대경로 추가
import PostCardArticle from 'components/postCard/PostCardArticle';
import PostCardHeader from 'components/postCard/PostCardHeader';

const PostCardContainer = () => {
  return (
    <Container>
      <PostCardHeader />
      <PostCardArticle />

      <article>이미지</article>
      <ul>좋아요 및 북마크</ul>
    </Container>
  );
};

const Container = styled.section`
  padding: 16px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  background-color: #3ddf3d;
`;

export default PostCardContainer;
