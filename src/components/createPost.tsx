import styled from '@emotion/styled';
import { ProfileCircle } from 'components/navbar';
import { Card } from 'components/popularPosts';
import { useDarkMode } from 'hooks/useDarkMode';

export const CreatePost = () => {
  const { theme } = useDarkMode();

  return (
    <Card theme={theme} style={{ display: 'flex', alignItems: 'center' }}>
      <ProfileCircle theme={theme} alt="profile" src="https://github.com/Park-Wonbin.png" />
      <CreatePostHint theme={theme}>어떤 개발 이야기를 공유하고 싶나요?</CreatePostHint>
    </Card>
  );
};

const CreatePostHint = styled.p`
  margin-left: 8px;
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
`;
