import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';

interface PostCardTagProps {
  tags: [string];
}

const PostCardTag = ({ tags }: PostCardTagProps) => {
  return (
    <WrapTags>
      {tags.map(item => (
        <Tag key={`${uuid()}`}>{item}</Tag>
      ))}
    </WrapTags>
  );
};

const WrapTags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  border-radius: 20px;
  font-size: ${props => props.theme.fontSize.FONT_BODY3};
  line-height: 18px;
  color: ${props => props.theme.colors.TEXT_HIGH};
  background-color: ${props => props.theme.colors.GRAY_1};
`;

export default PostCardTag;
