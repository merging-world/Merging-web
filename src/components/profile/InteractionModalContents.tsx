import styled from '@emotion/styled';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import CloseIcon from 'assets/icons/CloseIcon';
import { authState } from 'atoms/auth';
import { IFriend } from 'components/profile/RankContent';
import { useDarkMode } from 'hooks/useDarkMode';
import { IInteraction } from 'types/Friend';
import 'styles/Animation.css';
import 'styles/Keyframes.css';
import { postInteraction } from 'utils/apis';

interface InteractionModalContentsProps {
  closed: () => void;
  friend: IFriend;
  interaction: IInteraction;
}

const InteractionModalContents = ({
  closed,
  friend,
  interaction,
}: InteractionModalContentsProps) => {
  const { theme, isDarkMode } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  const [showAlert, setShowAlert] = useState<{ desc: string; status: null | boolean }>({
    desc: '',
    status: null,
  });

  const friendInteraction = async () => {
    const res = await postInteraction(
      auth.accessToken ?? '',
      interaction.key ?? '',
      friend.user.uuid ?? '',
      friend.tree?.uuid ?? '',
    );
    if (res) {
      setShowAlert({
        desc: res.lastInteractionAt ? '최근에 인터렉션을 보냈어요' : interaction.desc,
        status: true,
      });
      setTimeout(function () {
        setShowAlert({
          desc: res.lastInteractionAt ? '최근에 인터렉션을 보냈어요' : interaction.desc,
          status: false,
        });
      }, 2000);
    }
  };
  return (
    <>
      <Alert
        className={showAlert.status ? 'slide-in-top' : 'slide-out-top'}
        style={{ display: showAlert.status == null ? 'none' : 'flex' }}
      >
        {showAlert.desc}
      </Alert>
      <ModalBox theme={theme}>
        <ModalLayout>
          <CloseButton onClick={closed}>
            <CloseIcon width={14} height={14} color={theme.colors.GRAY_2} />
          </CloseButton>
          <TreeBox>
            <TreeImg src={friend.tree?.tree[friend.tree.currentStep].good[0]} />
            <ContentTitle theme={theme}>
              {friend.user.nickname}님의 {friend.tree?.tree[friend.tree.currentStep].name.kr}
            </ContentTitle>
            <DetailWrap>
              <DetailBox>
                <DetailTitle>나무 회차</DetailTitle>
                <DetailContent>{friend.tree?.lifeTime}회차</DetailContent>
              </DetailBox>
              <DetailBox>
                <DetailTitle>나무 커밋</DetailTitle>
                <DetailContent>{friend.tree?.commitCount}개</DetailContent>
              </DetailBox>
            </DetailWrap>
          </TreeBox>
          <Button onClick={friendInteraction}>
            <img alt="interaction" width="32px" height="32px" src={interaction.src} />
            <ButtonText theme={theme}>{interaction.name}</ButtonText>
          </Button>
        </ModalLayout>
      </ModalBox>
    </>
  );
};

const ModalBox = styled.div`
  width: 100%;
  max-width: 500px;
  min-height: 520px;
  border-radius: 20px;
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  margin: 32px;
`;

const ModalLayout = styled.ul`
  height: calc(100% - 64px);
  align-items: center;
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TreeBox = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -32px;
`;

const TreeImg = styled.img`
  width: 250px;
  height: 250px;
  object-fit: contain;
`;

const ContentTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.FONT_H1};
  line-height: 1.5em;
  font-weight: bold;
  text-align: center;
  color: ${props => props.theme.colors.TEXT_HIGH};
  margin-bottom: 24px;
`;

const DetailTitle = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const DetailContent = styled.h3`
  font-size: ${props => props.theme.fontSize.FONT_H2};
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-weight: bold;
`;

const DetailBox = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const DetailWrap = styled.ul`
  display: flex;
  gap: 32px;
`;

const Button = styled.button`
  padding: 8px;
`;

const ButtonText = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const CloseButton = styled.button`
  display: flex;
  padding: 8px;
  margin: -16px -16px 0 auto;
`;

const Alert = styled.div`
  position: fixed;
  top: 30px;
  margin: 0 auto;
  padding: 16px 32px;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_HIGH};
  background: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  box-shadow: 0 4px 26px ${props => props.theme.colors.SHADOW};
  border-radius: 100px;
`;

export default InteractionModalContents;
