import styled from '@emotion/styled';

const PostCardContainer = () => {
  return <Container>PostCardContainer</Container>;
};

const Container = styled.section`
  border-radius: 20px;
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  background-color: #3ddf3d;
`;

export default PostCardContainer;
