import styled from '@emotion/styled';
import theme from 'styles/theme';

export const PopularPosts = () => {
  return (
    <Card>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img className="icon" alt="popular" src="/assets/icons/fire.svg" />
        <p className="title">실시간 인기 게시글</p>
      </div>
    </Card>
  );
};

const Card = styled.div`
  background-color: ${theme.colors.BACKGROUND_SECONDARY};
  border-radius: 20px;
  box-shadow: 0px 4px 26px ${theme.colors.SHADOW};
  padding: 24px 16px;
  .title {
    font-size: ${theme.fontSize.FONT_H2};
    font-weight: bold;
    color: ${theme.colors.TEXT_HIGH};
  }
  .icon {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
