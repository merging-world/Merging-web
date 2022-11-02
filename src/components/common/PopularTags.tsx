import styled from '@emotion/styled';
import Card from 'components/layouts/Card';
import { useDarkMode } from 'hooks/useDarkMode';

// TODO: API 연동
const sampleDate = [
  { name: '고양이', count: 10 },
  { name: '강아지', count: 20 },
  { name: '개발_안할래', count: 30 },
  { name: '잘거야', count: 40 },
  { name: '니가몰알아조랭이떡같이생긴게', count: 100 },
];

const PopularTags = () => {
  const { theme } = useDarkMode();

  return (
    <Card>
      <CardTitle>
        <PopularIcon alt="popular contents icon" src="/assets/icons/tag.svg" />
        <PopularTitle theme={theme}>실시간 인기 태그</PopularTitle>
      </CardTitle>
      {sampleDate.map((tag, idx) => (
        <TagContent key={idx}>
          <Idx theme={theme}>{idx + 1}</Idx>
          <p># {tag.name}</p>
          <span>{tag.count} 게시물</span>
        </TagContent>
      ))}
    </Card>
  );
};

const CardTitle = styled.div`
  display: flex;
  align-items: center;
`;

const PopularIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const PopularTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.FONT_H2};
  font-weight: bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const Idx = styled.ol`
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-weight: bold;
  min-width: 10px;
  margin-right: 16px;
`;

const TagContent = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  &:hover {
    cursor: pointer;
  }
  > p {
    flex-grow: 1;
    color: ${props => props.theme.colors.TEXT_HIGH};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > span {
    color: ${props => props.theme.colors.TEXT_MEDIUM};
    margin-left: 16px;
    flex-shrink: 0;
  }
`;

export default PopularTags;
