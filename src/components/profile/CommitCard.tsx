import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import Card from 'components/layouts/Card';
import { CardTitle } from 'components/profile/CommitCalendar';
import { useDarkMode } from 'hooks/useDarkMode';
import { getCommits } from 'utils/apis';

interface ICommitCard {
  isLoading: boolean;
  today: number;
  week: number;
  continuedDays: number;
}

const CommitCard = () => {
  const { theme, isDarkMode } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);
  const [value, setValue] = useState<ICommitCard>({
    isLoading: true,
    today: 0,
    week: 0,
    continuedDays: 0,
  });

  async function getData() {
    const commits = await getCommits(auth.accessToken ?? '');
    if (commits.length > 0) {
      const today = commits[commits.length - 1].count;
      const continuedDays = commits[commits.length - 1].continuedDays;
      const size = commits.length > 7 ? 7 : commits.length;
      let sum = 0;
      for (let i = 1; i <= size; i++) {
        sum += commits[commits.length - i].count;
      }
      setValue({
        isLoading: false,
        today: today,
        week: sum,
        continuedDays: continuedDays,
      });
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <CardTitle theme={theme}>커밋 기록</CardTitle>
      <Wrap>
        <CommitInfo>
          <img width="52px" src="/assets/icons/check.svg" />
          <h3>{value.today}개</h3>
          <p>오늘</p>
        </CommitInfo>
        <CommitInfo>
          <img width="52px" src="/assets/icons/calendar.svg" />
          <h3>{value.week}개</h3>
          <p>최근 7일</p>
        </CommitInfo>
        <CommitInfo>
          <img width="52px" src="/assets/icons/fire.svg" />
          <h3>{value.continuedDays}일</h3>
          <p>연속</p>
        </CommitInfo>
      </Wrap>
    </Card>
  );
};

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CommitInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
  > img {
    width: 50px;
    height: 50px;
  }
  > h3 {
    font-weight: bold;
    font-size: ${props => props.theme.fontSize.FONT_H3};
    color: ${props => props.theme.colors.TEXT_HIGH};
  }
  > p {
    font-size: ${props => props.theme.fontSize.FONT_BODY2};
    color: ${props => props.theme.colors.TEXT_MEDIUM};
  }
`;

export default CommitCard;
