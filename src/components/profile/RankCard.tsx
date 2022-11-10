import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import Modal from 'components/common/modal/Modal';
import Card from 'components/layouts/Card';
import { CardTitle } from 'components/profile/CommitCalendar';
import InteractionModalContents from 'components/profile/InteractionModalContents';
import RankContent, { IFriend } from 'components/profile/RankContent';
import { useDarkMode } from 'hooks/useDarkMode';
import { interactionList } from 'types/Friend';
import { getRank } from 'utils/apis';

const RankCard = () => {
  const { theme, isDarkMode } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);
  const [values, setValues] = useState<Array<IFriend>>([]);
  const [modal, setModal] = useState<{ open: boolean; friend: IFriend | null }>({
    open: false,
    friend: null,
  });

  async function getData() {
    const res = await getRank(auth.accessToken ?? '');
    setValues(res);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Card>
        <CardTitle theme={theme}>나무 랭킹</CardTitle>
        {values?.map((friend: IFriend, idx: number) => (
          <RankContent
            key={idx}
            friend={friend}
            idx={idx + 1}
            openModal={() => {
              setModal({ open: true, friend: friend });
            }}
          />
        ))}
      </Card>
      {modal.open && (
        <Modal>
          <InteractionModalContents
            interaction={interactionList[Math.floor(Math.random() * interactionList.length)]}
            closed={() => setModal({ open: false, friend: null })}
            friend={modal.friend!}
          />
        </Modal>
      )}
    </>
  );
};

export default RankCard;
