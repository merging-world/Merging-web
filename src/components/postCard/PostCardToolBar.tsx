import styled from '@emotion/styled';
import { BookMarkIcon, HeartIcon, CommentIcon } from 'assets/icons';
import { useDarkMode } from 'hooks/useDarkMode';

interface PostCardToolBarProps {
  like: number;
  comments: number;
}

const PostCardToolBar = ({ like, comments }: PostCardToolBarProps) => {
  const { theme } = useDarkMode();

  return (
    <Wrap>
      <IconWrap>
        <HeartWrap>
          <li>
            <HeartIcon color={theme.colors.ALERT} />
          </li>
          <li>{like}</li>
        </HeartWrap>
        <CommentWrap>
          <li>
            <CommentIcon color={theme.colors.GRAY_2} />
          </li>
          <li>{comments}</li>
        </CommentWrap>
      </IconWrap>
      <li>
        <BookMarkIcon color={theme.colors.PRIMARY} />
      </li>
    </Wrap>
  );
};

const Wrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const IconWrap = styled.ul`
  display: flex;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
  gap: 18px;
`;

const HeartWrap = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const CommentWrap = styled.ul`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export default PostCardToolBar;
