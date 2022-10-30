import styled from '@emotion/styled';
import Card from 'components/layouts/Card';
import { useDarkMode } from 'hooks/useDarkMode';

const PopularPosts = () => {
  const { theme } = useDarkMode();

  return (
    <Card>
      <CardTitle>
        <PopularIcon alt="popular contents icon" src="/assets/icons/fire.svg" />
        <PopularTitle theme={theme}>실시간 인기 게시글</PopularTitle>
      </CardTitle>
    </Card>
  );
};

const CardTitle = styled.h2`
  display: flex;
  align-items: center;
`;

const PopularIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const PopularTitle = styled.h3`
  font-size: ${props => props.theme.fontSize.FONT_H2};
  font-weight: bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

export default PopularPosts;
