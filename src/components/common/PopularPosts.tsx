import styled from '@emotion/styled';
import { CommentIcon, HeartIcon } from 'assets/icons';
import Card from 'components/layouts/Card';
import { useDarkMode } from 'hooks/useDarkMode';

// TODO: API 연동
const sampleDate = [
  {
    title: '게시물 제목 없는경우 내용 앞부분 1줄 넘으면...',
    createdAt: '2022-10-31',
    likeCount: 0,
    commentCount: 0,
  },
  { title: 'hihi', createdAt: '2022-10-31', likeCount: 0, commentCount: 0 },
  { title: 'hihi', createdAt: '2022-10-31', likeCount: 0, commentCount: 0 },
];

const PopularPosts = () => {
  const { theme } = useDarkMode();

  return (
    <Card>
      <CardTitle>
        <PopularIcon alt="popular contents icon" src="/assets/icons/fire.svg" />
        <PopularTitle theme={theme}>실시간 인기 게시글</PopularTitle>
      </CardTitle>
      {sampleDate.map((post, idx) => (
        <PostContent key={idx}>
          <p>{post.title}</p>
          <InfoWrap>
            <p>{post.createdAt}</p>
            <IconWrap>
              <HeartIcon width={16} height={16} color={theme.colors.GRAY_2} />
              <span>{post.likeCount}</span>
            </IconWrap>
            <IconWrap>
              <CommentIcon width={16} height={16} color={theme.colors.GRAY_2} />
              <span>{post.commentCount}</span>
            </IconWrap>
          </InfoWrap>
        </PostContent>
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

const PostContent = styled.div`
  margin-top: 16px;
  &:hover {
    cursor: pointer;
  }
  > p {
    font-size: ${props => props.theme.fontSize.FONT_BODY2};
    color: ${props => props.theme.colors.TEXT_HIGH};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  > div {
    margin-top: 8px;
    color: ${props => props.theme.colors.TEXT_MEDIUM};
    display: flex;
    align-items: center;
    > p {
      flex-grow: 1;
    }
  }
`;

const InfoWrap = styled.div`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.FONT_BODY3};
`;

const IconWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: 8px;
  gap: 4px;
`;
export default PopularPosts;
