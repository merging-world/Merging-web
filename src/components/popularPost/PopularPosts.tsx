import { useEffect, useState } from 'react';
import SideCard from 'components/layouts/SideCard';
import PostContent from 'components/popularPost/PostContent';
import { CommunityCard } from 'types/Community';
import { getPopularPosts } from 'utils/apis';

const PopularPosts = () => {
  const [posts, setPosts] = useState<Array<CommunityCard>>([]);

  async function getData() {
    setPosts(await getPopularPosts());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SideCard title="실시간 인기 게시글" imgSrc="/assets/icons/fire.svg">
      {posts.map((data, idx) => (
        <PostContent post={data} key={idx} />
      ))}
    </SideCard>
  );
};

export default PopularPosts;
