import styled from '@emotion/styled';
import Profile from 'components/layouts/Profile';

const PostCardHeader = () => {
  return (
    <Wrap>
      <ProfileWrap>
        <li>
          <Profile info="profile" url="https://github.com/Park-Wonbin.png" />
        </li>
        <ProfileTextWrap>
          <Nickname>닉네임</Nickname>
          <TimeLog>10분전</TimeLog>
        </ProfileTextWrap>
      </ProfileWrap>
      <li>3개점</li>
    </Wrap>
  );
};

const Wrap = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 38px;
`;

const ProfileWrap = styled.ul`
  display: flex;
  align-items: center;
`;

const ProfileTextWrap = styled.ul`
  margin-left: 8px;
`;

const Nickname = styled.li`
  margin-bottom: 6px;
  font-size: ${props => props.theme.fontSize.FONT_BODY2};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const TimeLog = styled.li`
  font-size: ${props => props.theme.fontSize.FONT_BODY3};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

export default PostCardHeader;
