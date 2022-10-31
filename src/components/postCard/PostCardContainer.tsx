import styled from '@emotion/styled';
import PostCardHeader from 'components/postCard/PostCardHeader';

const PostCardContainer = () => {
  return (
    <Container>
      <PostCardHeader />
      <article>
        게시글 내용
        <ul>테그</ul>
      </article>
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
