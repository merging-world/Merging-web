import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from 'atoms/auth';
import AlertContent from 'components/common/notification/AlertContent';
import { MEDIA_QUERY_END_POINT } from 'constants/index';
import { useDarkMode } from 'hooks/useDarkMode';
import { INotification } from 'types/Notification';
import { getNotifications } from 'utils/apis';

const AlertModal = () => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);
  const [notifications, setNotifications] = useState<Array<INotification>>([]);

  const getData = async () => {
    setNotifications(await getNotifications(auth.accessToken ?? ''));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <AlertLayout>
      <AlertPadding>
        <Wrap theme={theme}>
          <Title theme={theme}>알림</Title>
          <ScrollArea>
            {notifications.map((item, idx) => (
              <AlertContent key={idx} notification={item} />
            ))}
          </ScrollArea>
        </Wrap>
      </AlertPadding>
    </AlertLayout>
  );
};

const AlertLayout = styled.section`
  position: fixed;
  top: 54px;
  width: 100%;
  z-index: 999;
`;

const AlertPadding = styled.div`
  margin: 0 auto;
  max-width: ${MEDIA_QUERY_END_POINT.MEDIUM};
  display: flex;
  justify-content: right;
`;

const Wrap = styled.div`
  width: 100%;
  max-width: 360px;
  ${props => props.theme.breakPoint.small} {
    max-width: 100%;
  }
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  border-radius: 20px;
  box-shadow: 0px 4px 26px ${props => props.theme.colors.SHADOW_SECONDARY};
  overflow: hidden;
`;

const Title = styled.h3`
  font-size: ${props => props.theme.fontSize.FONT_H2};
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-weight: bold;
  padding: 20px 20px;
`;

const ScrollArea = styled.ul`
  max-height: 500px;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export default AlertModal;
