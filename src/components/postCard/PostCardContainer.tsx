import styled from '@emotion/styled';
// TODO : index 절대경로 추가
import { PostCardDatas } from 'assets/mockData/MockData';
import PostCard from 'components/postCard/PostCard';

const PostCardContainer = () => {
  return (
    <PostCardsWrap>
      {PostCardDatas.map(data => (
        <PostCard data={data} key={data.id} />
      ))}
    </PostCardsWrap>
  );
};

const PostCardsWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default PostCardContainer;
