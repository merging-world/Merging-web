import { useEffect, useState } from 'react';
import SideCard from 'components/layouts/SideCard';
import TagContent, { IPopularTag } from 'components/popularTag/TagContent';
import { getPopularTags } from 'utils/apis';

const PopularTags = () => {
  const [tags, setTags] = useState<Array<IPopularTag>>([]);

  async function getData() {
    setTags(await getPopularTags());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <SideCard title="실시간 인기 태그" imgSrc="/assets/icons/tag.svg">
      {tags.map((tag, idx) => (
        <TagContent tag={tag} idx={idx + 1} key={idx} />
      ))}
    </SideCard>
  );
};

export default PopularTags;
