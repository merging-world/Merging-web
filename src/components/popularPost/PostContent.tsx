import styled from '@emotion/styled';
import moment from 'moment';
import { CommentIcon, HeartIcon } from 'assets/icons';
import { useDarkMode } from 'hooks/useDarkMode';
import { CommunityCard } from 'types/Community';

interface PostContentProps {
  post: CommunityCard;
}

const PostContent = ({ post }: PostContentProps) => {
  const { theme } = useDarkMode();

  return (
    <PostContentWrap>
      <PostContentTitle>{post.title}</PostContentTitle>
      <InfoWrap>
        <TimeText>{moment(post.createdAt).format('MM/DD HH:mm')}</TimeText>
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
