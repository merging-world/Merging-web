import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import ArrowRightIcon from 'assets/icons/ArrowRightIcon';
import { RankContentProps } from 'components/profile/RankContent';
import { useDarkMode } from 'hooks/useDarkMode';
import { stepName } from 'types/Tree';

const RankContentDetail = ({ friend, idx }: RankContentProps) => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  return (
    <>
      <Idx theme={theme}>{idx}</Idx>
      {friend.tree ? (
        <>
          <TreeWrap>
            <TreeImg src={friend.tree.tree[friend.tree.currentStep].good[0]} />
            <TreeTextWrap>
              <TreeText theme={theme}>
                {friend.user.nickname}님의 {friend.tree.tree[friend.tree.currentStep].name.kr}
              </TreeText>
              <TreeDetailText theme={theme}>
                {stepName[friend.tree.currentStep]} | {friend.tree.commitCount}커밋
              </TreeDetailText>
            </TreeTextWrap>
          </TreeWrap>
          {friend.user.uuid != auth.user?.uuid && (
            <ArrowRightIcon color={theme.colors.GRAY_2} width={15} height={15} />
          )}
        </>
      ) : (
        <NullText>{friend.user.nickname}님의 나무가 없습니다 😢</NullText>
      )}
    </>
  );
};

const Idx = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-weight: bold;
  min-width: 10px;
  margin-right: 16px;
`;

const TreeImg = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  background-color: ${props => props.theme.colors.PASTEL_GREEN};
  border-radius: 15px;
`;

const TreeWrap = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const TreeTextWrap = styled.div`
  margin: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const TreeText = styled.h3`
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-weight: bold;
`;

const TreeDetailText = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY3};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

const NullText = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

export default RankContentDetail;
