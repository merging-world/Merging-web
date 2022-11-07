import styled from '@emotion/styled';
// TODO : index 절대경로 추가
import PostCardToolBar from './PostCardToolBar';
import PostCardArticle from 'components/postCard/PostCardArticle';
import PostCardHeader from 'components/postCard/PostCardHeader';
import PostCardImage from 'components/postCard/PostCardImage';
import { CommunityCard } from 'types/Community';

interface PostCardProps {
  data: CommunityCard;
}
//TODO : data 구조 나오면 any types로 수정 예정
const PostCard = ({ data }: PostCardProps) => {
  return (
    <PostCardWrap>
      <PostCardHeader
        author={data.user.nickname}
        profile={data.user.githubName}
        createdAt={data.createdAt}
      />
      <PostCardArticle title={data.title} description={data.content} tags={data.tags} />
      <PostCardImage imageList={data.image} />
      <PostCardToolBar like={data.likeCount} comments={data.commentCount} />
    </PostCardWrap>
  );
};

const PostCardWrap = styled.section`
  padding: 16px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  box-shadow: 0px 4px 26px ${props => props.theme.colors.SHADOW};
`;

export default PostCard;
