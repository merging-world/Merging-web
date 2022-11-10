import styled from '@emotion/styled';
import { useDarkMode } from 'hooks/useDarkMode';

export interface IPopularTag {
  name: string;
  postCount: number;
}

interface TagContentProps {
  idx: number;
  tag: IPopularTag;
}

const TagContent = ({ tag, idx }: TagContentProps) => {
  const { theme } = useDarkMode();

  return (
    <TagContentWrap>
      <Idx theme={theme}>{idx}</Idx>
      <Tag># {tag.name}</Tag>
      <Count>{tag.postCount} 게시물</Count>
    </TagContentWrap>
  );
};

const Idx = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-weight: bold;
  min-width: 10px;
  margin-right: 16px;
`;

const Tag = styled.p`
  flex-grow: 1;
  color: ${props => props.theme.colors.TEXT_HIGH};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Count = styled.span`
  color: ${props => props.theme.colors.TEXT_MEDIUM};
  margin-left: 16px;
  flex-shrink: 0;
`;

const TagContentWrap = styled.article`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  &:hover {
    cursor: pointer;
  }
`;

export default TagContent;
