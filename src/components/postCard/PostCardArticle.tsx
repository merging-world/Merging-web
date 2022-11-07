import styled from '@emotion/styled';
import PostCardTag from 'components/postCard/PostCardTag';
import { Tag } from 'types/Community';

interface PostCardArticleProps {
  title: string;
  description: string;
  tags: Array<Tag>;
}

const PostCardArticle = ({ title, description, tags }: PostCardArticleProps) => {
  console.log('tags', tags);
  return (
    <Wrap>
      <Title>{title}</Title>
      <ContentsText>{description}</ContentsText>
      <PostCardTag tags={tags} />
    </Wrap>
  );
};

const Wrap = styled.section`
  margin: 10px 0 16px 0;
`;

const Title = styled.h2`
  margin-bottom: 8px;
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const ContentsText = styled.article`
  margin-bottom: 8px;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  line-height: 21px;
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

export default PostCardArticle;
