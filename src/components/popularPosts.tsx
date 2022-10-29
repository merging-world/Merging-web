import styled from '@emotion/styled';
import { useDarkMode } from 'hooks/useDarkMode';

export const PopularPosts = () => {
  const { theme } = useDarkMode();

  return (
    <Card theme={theme}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img className="icon" alt="popular" src="/assets/icons/fire.svg" />
        <p className="title">실시간 인기 게시글</p>
      </div>
    </Card>
  );
};

export const Card = styled.div`
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  border-radius: 20px;
  box-shadow: 0px 4px 26px ${props => props.theme.colors.SHADOW};
  padding: 20px 16px;
  .title {
    font-size: ${props => props.theme.fontSize.FONT_H2};
    font-weight: bold;
    color: ${props => props.theme.colors.TEXT_HIGH};
  }
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
