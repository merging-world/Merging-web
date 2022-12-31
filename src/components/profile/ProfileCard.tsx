import { css } from '@emotion/css';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import { GithubIcon } from 'assets/icons';
import Card from 'components/layouts/Card';
import Profile from 'components/layouts/Profile';
import { useDarkMode } from 'hooks/useDarkMode';
import { getFriend, getTreeBook, getUserPostsCount } from 'utils/apis';

const ProfileCard = () => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  const [treeBook, setTreeBook] = useState([]);
  const [friends, setFriends] = useState([]);
  const [count, setCount] = useState(0);

  const getData = async () => {
    setTreeBook(await getTreeBook(auth.accessToken ?? ''));
    setFriends(await getFriend(auth.accessToken ?? ''));
    setCount(await getUserPostsCount(auth.user?.uuid ?? ''));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Card>
      <Box>
        <div>
          <Nickname theme={theme}>{auth.user?.nickname}</Nickname>
          <Wrap>
            <GithubIcon color={theme.colors.TEXT_MEDIUM} width={18} height={18} />
            <GithubName theme={theme}>{auth.user?.githubName}</GithubName>
          </Wrap>
        </div>
        <Profile
          url={`https://github.com/${auth.user?.githubName}.png`}
          info={'profile'}
          size={64}
        />
      </Box>
      <Intro color={auth.user?.intro ? theme.colors.TEXT_HIGH : theme.colors.GRAY_2}>
        {auth.user?.intro ?? '프로필 편집에서 소개를 입력해주세요'}
      </Intro>
      <Button theme={theme}>프로필 편집</Button>
      <SummaryBox>
        <SummaryWrap>
          <Num theme={theme}>{count}</Num>
          <Desc theme={theme}>게시물</Desc>
        </SummaryWrap>
        <SummaryWrap>
          <Num theme={theme}>{friends.length}</Num>
          <Desc theme={theme}>친구</Desc>
        </SummaryWrap>
        <SummaryWrap>
          <Num theme={theme}>{treeBook.length}</Num>
          <Desc theme={theme}>나무도감</Desc>
        </SummaryWrap>
      </SummaryBox>
    </Card>
  );
};

const Wrap = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Box = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
`;

const Nickname = styled.h1`
  font-size: ${props => props.theme.fontSize.FONT_H1};
  font-weight: bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
  margin-bottom: 16px;
`;

const GithubName = styled.p`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

const Intro = styled.p`
  margin: 24px 0;
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.color};
`;

const Button = styled.button`
  width: 100%;
  height: 34px;
  border-radius: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.TEXT_MEDIUM};
  background-color: ${props => props.theme.colors.GRAY_1};
  font-size: ${props => props.theme.fontSize.FONT_BODY3};
  &:hover {
    cursor: pointer;
  }
`;

const SummaryBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-around;
  margin-top: 24px;
`;

const SummaryWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const Num = styled.h3`
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-size: ${props => props.theme.fontSize.FONT_H3};
  font-weight: bold;
`;

const Desc = styled.p`
  color: ${props => props.theme.colors.TEXT_HIGH};
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
`;

export default ProfileCard;
