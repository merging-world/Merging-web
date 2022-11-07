import styled from '@emotion/styled';
import { CommentIcon, HeartIcon } from 'assets/icons';
import { useDarkMode } from 'hooks/useDarkMode';

export interface IPost {
  // TODO: 나중에 API 연결하면서 바꿀 예정 + type으로 옮기기
  title: string;
  createdAt: Date;
  likeCount: number;
  commentCount: number;
}

interface PostContentProps {
  post: IPost;
}

const PostContent = ({ post }: PostContentProps) => {
  const { theme } = useDarkMode();

  return (
    <PostContentWrap>
      <PostContentTitle>{post.title}</PostContentTitle>
      <InfoWrap>
        <TimeText>{post.createdAt.toDateString()}</TimeText>
        <IconWrap>
          <HeartIcon width={16} height={16} color={theme.colors.GRAY_2} />
          <span>{post.likeCount}</span>
        </IconWrap>
        <IconWrap>
          <CommentIcon width={16} height={16} color={theme.colors.GRAY_2} />
          <span>{post.commentCount}</span>
        </IconWrap>
      </InfoWrap>
    </PostContentWrap>
  );
};

const PostContentWrap = styled.article`
  margin-top: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const PostContentTitle = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_HIGH};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const InfoWrap = styled.ul`
  margin-top: 8px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.FONT_BODY3};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

const TimeText = styled.li`
  flex-grow: 1;
`;

const IconWrap = styled.li`
  display: flex;
  align-items: center;
  margin-left: 8px;
  gap: 4px;
`;

export default PostContent;
