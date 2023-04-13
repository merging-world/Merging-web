import styled from '@emotion/styled';
import moment from 'moment';
import { useDarkMode } from 'hooks/useDarkMode';
import { INotification, NotificationType } from 'types/Notification';

interface AlertContentProps {
  notification: INotification;
}

const AlertContent = ({ notification }: AlertContentProps) => {
  const { theme, isDarkMode } = useDarkMode();

  return (
    <Box
      style={{
        background: notification.isRead
          ? 'transparent'
          : isDarkMode
          ? `${theme.colors.GRAY_1}33`
          : `${theme.colors.PRIMARY}22`,
      }}
    >
      <Wrap>
        <img alt="icon" src={NotificationType[notification.type].src} width={22} height={22} />
        <SubtitleGrow>{NotificationType[notification.type].type}</SubtitleGrow>
        <Subtitle>{moment(notification.updatedAt).format('MM/DD HH:mm')}</Subtitle>
      </Wrap>
      <Content>
        {notification.title.kr.replaceAll('${nickname}', notification.fromUser.nickname ?? '')}
      </Content>
    </Box>
  );
};

const Box = styled.li`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 20px;
`;

const Wrap = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const Subtitle = styled.span`
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

const SubtitleGrow = styled(Subtitle)`
  flex-grow: 1;
`;

const Content = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_HIGH};
  margin-left: 40px;
`;
export default AlertContent;
