import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import Card from 'components/layouts/Card';
import { API_ENDPOINT } from 'constants/index';
import { useDarkMode } from 'hooks/useDarkMode';

const CommitCalendar = () => {
  const { theme, isDarkMode } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);
  const [imgSrc, setImgSrc] = useState({ data: '' });

  async function getImage() {
    try {
      const imageBlob = (
        await axios.get(
          `${API_ENDPOINT}/commit/calendar.svg?theme=${isDarkMode ? 'dark' : 'light'}`,
          { responseType: 'blob', headers: { Authorization: `Bearer ${auth.accessToken}` } },
        )
      ).data;
      setImgSrc({ data: URL.createObjectURL(imageBlob) });
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getImage();
  }, [isDarkMode]);

  return (
    <Card>
      <CardTitle theme={theme}>커밋 캘린더</CardTitle>
      {imgSrc.data != '' && <CalendarImage src={imgSrc.data} alt={'Commit Calendar'} />}
    </Card>
  );
};

export const CardTitle = styled.h2`
  font-size: ${props => props.theme.fontSize.FONT_H2};
  font-weight: bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
  margin-bottom: 16px;
`;

const CalendarImage = styled.img`
  width: 100%;
`;

export default CommitCalendar;
