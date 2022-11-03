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
          <InfoImage src="/assets/icons/check.svg" />
          <InfoTitle theme={theme}>{value.today}개</InfoTitle>
          <InfoDetail theme={theme}>오늘</InfoDetail>
        </CommitInfo>
        <CommitInfo>
          <InfoImage src="/assets/icons/calendar.svg" />
          <InfoTitle theme={theme}>{value.week}개</InfoTitle>
          <InfoDetail theme={theme}>최근 7일</InfoDetail>
        </CommitInfo>
        <CommitInfo>
          <InfoImage src="/assets/icons/fire.svg" />
          <InfoTitle theme={theme}>{value.continuedDays}일</InfoTitle>
          <InfoDetail theme={theme}>연속</InfoDetail>
        </CommitInfo>
      </Wrap>
    </Card>
  );
};

const Wrap = styled.article`
  display: flex;
  justify-content: space-around;
`;

const CommitInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin: 8px 0;
`;

const InfoImage = styled.img`
  width: 50px;
  height: 50px;
`;

const InfoTitle = styled.h3`
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.FONT_H3};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const InfoDetail = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

export default CommitCard;
