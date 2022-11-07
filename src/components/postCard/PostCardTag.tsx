import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';
import { Tag } from 'types/Community';

interface PostCardTagProps {
  tags: Array<Tag>;
}

const PostCardTag = ({ tags }: PostCardTagProps) => {
  console.log('tags', tags);
  return (
    <WrapTags>
      {tags.map(item => (
        <Item key={`${uuid()}`}>{item.name}</Item>
      ))}
    </WrapTags>
  );
};

const WrapTags = styled.ul`
  display: flex;
  gap: 8px;
`;

const Item = styled.li`
  padding: 4px 8px;
  border-radius: 20px;
  font-size: ${props => props.theme.fontSize.FONT_BODY3};
  line-height: 18px;
  color: ${props => props.theme.colors.TEXT_HIGH};
  background-color: ${props => props.theme.colors.GRAY_1};
`;

export default PostCardTag;
