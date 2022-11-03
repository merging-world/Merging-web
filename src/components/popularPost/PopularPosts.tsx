import SideCard from 'components/layouts/SideCard';
import PostContent, { IPost } from 'components/popularPost/PostContent';

// TODO: API 연동
const sampleDate = [
  {
    title: '게시물 제목 없는경우 내용 앞부분 1줄 넘으면...',
    createdAt: new Date(),
    likeCount: 0,
    commentCount: 0,
  },
  { title: 'hihi', createdAt: new Date(), likeCount: 0, commentCount: 0 },
  { title: 'hihi', createdAt: new Date(), likeCount: 0, commentCount: 0 },
];

const PopularPosts = () => {
  return (
    <SideCard title="실시간 인기 게시글" imgSrc="/assets/icons/fire.svg">
      {sampleDate.map((data, idx) => (
        <PostContent post={data as IPost} key={idx} />
      ))}
    </SideCard>
  );
};

export default PopularPosts;
