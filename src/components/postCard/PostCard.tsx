import styled from '@emotion/styled';
// TODO : index 절대경로 추가
import PostCardToolBar from './PostCardToolBar';
import PostCardArticle from 'components/postCard/PostCardArticle';
import PostCardHeader from 'components/postCard/PostCardHeader';

//TODO : data 구조 나오면 any types로 수정 예정
const PostCard = ({ data }: any) => {
  return (
    <PostCardWrap>
      <PostCardHeader author={data.author} createdAt={data.createdAt} url={data.link} />
      <PostCardArticle title={data.title} description={data.description} tags={data.tags} />
      <Image />
      <PostCardToolBar like={data.like} comments={data.comments} />
    </PostCardWrap>
  );
};

const PostCardWrap = styled.section`
  padding: 16px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  box-shadow: 0px 4px 26px ${props => props.theme.colors.SHADOW};
`;

const Image = styled.article`
  height: 300px;
  border-radius: 5px;
  background-color: ${props => props.theme.colors.GRAY_2};
`;

export default PostCard;
