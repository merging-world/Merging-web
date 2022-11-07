import SideCard from 'components/layouts/SideCard';
import TagContent, { ITag } from 'components/popularTag/TagContent';

// TODO: API 연동
const sampleDate = [
  { name: '고양이', count: 10 },
  { name: '강아지', count: 20 },
  { name: '개발_안할래', count: 30 },
  { name: '잘거야', count: 40 },
  { name: '니가몰알아조랭이떡같이생긴게', count: 100 },
];

const PopularTags = () => {
  return (
    <SideCard title="실시간 인기 태그" imgSrc="/assets/icons/tag.svg">
      {sampleDate.map((tag, idx) => (
        <TagContent tag={{ ...tag, idx: idx + 1 } as ITag} key={idx} />
      ))}
    </SideCard>
  );
};

export default PopularTags;
