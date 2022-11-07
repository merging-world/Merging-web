import styled from '@emotion/styled';
import { useDarkMode } from 'hooks/useDarkMode';

export interface ITag {
  // TODO: 나중에 API 연결하면서 바꿀 예정 + type으로 옮기기
  idx: number;
  name: string;
  count: number;
}

interface TagContentProps {
  tag: ITag;
}

const TagContent = ({ tag }: TagContentProps) => {
  const { theme } = useDarkMode();

  return (
    <TagContentWrap>
      <Idx theme={theme}>{tag.idx}</Idx>
      <Tag># {tag.name}</Tag>
      <Count>{tag.count} 게시물</Count>
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
