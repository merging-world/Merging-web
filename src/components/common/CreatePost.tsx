import styled from '@emotion/styled';
import { ImageIcon } from 'assets/icons';
import Card from 'components/layouts/Card';
import Profile from 'components/layouts/Profile';
import { useDarkMode } from 'hooks/useDarkMode';

const CreatePost = () => {
  const { theme } = useDarkMode();

  return (
    <Card
      onClick={() => {
        // TODO: 게시글 생성하는 모달을 띄워주세요!
      }}
    >
      <Wrap>
        <Profile info="profile" url="https://github.com/Park-Wonbin.png" />
        <CreatePostTitle theme={theme}>어떤 개발 이야기를 공유하고 싶나요?</CreatePostTitle>
        <ImageIcon color={theme.colors.GRAY_2} width={20} height={20} />
      </Wrap>
    </Card>
  );
};

const Wrap = styled.div`
  display: flex;
  align-items: center;
`;

const CreatePostTitle = styled.h3`
  margin: 0 8px;
  flex-grow: 1;
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
`;

export default CreatePost;
