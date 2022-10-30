import styled from '@emotion/styled';
import { ProfileCircle } from 'components/common/Navbar';
import Card from 'components/layouts/Card';
import { useDarkMode } from 'hooks/useDarkMode';

const CreatePost = () => {
  const { theme } = useDarkMode();

  return (
    <Card>
      <Wrap>
        <ProfileCircle theme={theme} alt="profile" src="https://github.com/Park-Wonbin.png" />
        <CreatePostTitle theme={theme}>어떤 개발 이야기를 공유하고 싶나요?</CreatePostTitle>
      </Wrap>
    </Card>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const CreatePostTitle = styled.h3`
  margin-left: 8px;
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
`;

export default CreatePost;
