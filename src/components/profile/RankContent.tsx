import styled from '@emotion/styled';
import { useRecoilState } from 'recoil';
import { authState, IUser } from '../../atoms/auth';
import RankContentDetail from 'components/profile/RankContentDetail';
import { useDarkMode } from 'hooks/useDarkMode';
import { IUserTree } from 'types/Tree';

export interface IFriend {
  uuid: string;
  user: IUser;
  tree: IUserTree | null;
}

export interface RankContentProps {
  idx: number;
  friend: IFriend;
  openModal?: () => void;
}

const RankContent = ({ friend, idx, openModal }: RankContentProps) => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  return friend.user.uuid != auth.user?.uuid ? (
    <ContentWrap onClick={openModal}>
      <RankContentDetail friend={friend} idx={idx} />
    </ContentWrap>
  ) : (
    <MyContentWrap>
      <RankContentDetail friend={friend} idx={idx} />
    </MyContentWrap>
  );
};

const ContentWrap = styled.article`
  margin-top: 20px;
  padding: 0 8px;
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  &:hover {
    cursor: pointer;
  }
`;

const MyContentWrap = styled.article`
  display: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  box-shadow: 0 0 26px ${props => props.theme.colors.SHADOW_SECONDARY};
  border-radius: 10px;
  padding: 10px 12px;
  margin: 16px -4px -4px;
`;

export default RankContent;
