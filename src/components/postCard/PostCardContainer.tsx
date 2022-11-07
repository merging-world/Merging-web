import styled from '@emotion/styled';
// TODO : index 절대경로 추가
import { useQuery } from 'react-query';
// import { PostCardDatas } from 'assets/mockData/MockData';
import PostCard from 'components/postCard/PostCard';
import { getCommunity } from 'utils/apis';
import { QueryKeys } from 'utils/queryClient';

const PostCardContainer = () => {
  const { data: postCardList } = useQuery(QueryKeys.COMMUNITY, getCommunity);
  if (!postCardList) return <></>;

  return (
    <PostCardsWrap>
      {/* {postCardList.map(data => (
        <PostCard data={data} key={data.uuid} />
      ))} */}
    </PostCardsWrap>
  );
};

const PostCardsWrap = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default PostCardContainer;
