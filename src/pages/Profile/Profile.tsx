import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from 'atoms/auth';
import { Navbar } from 'components/common';
import Container, { MainSection, Sections, SideSection } from 'components/layouts/Container';
import CommitCalendar from 'components/profile/CommitCalendar';
import CommitCard from 'components/profile/CommitCard';
import ProfileCard from 'components/profile/ProfileCard';
import RankCard from 'components/profile/RankCard';
import TreeCard from 'components/profile/TreeCard';
import { firebaseAuth } from 'constants/firebase';
import { useDarkMode } from 'hooks/useDarkMode';

const ProfilePage = () => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  return (
    <>
      <Navbar />
      <Container>
        <Sections>
          <MainSection theme={theme}>
            <ProfileCard />
            <button
              onClick={() => {
                firebaseAuth.signOut().then(() => {
                  setAuth({
                    accessToken: null,
                    isValid: false,
                    user: null,
                  });
                });
              }}
            >
              로그아웃 테스트
            </button>
          </MainSection>
          <SideSection theme={theme}>
            <TreeCard />
            <CommitCard />
            <CommitCalendar />
            <RankCard />
          </SideSection>
        </Sections>
        <div style={{ height: '100px' }}></div>
      </Container>
    </>
  );
};

export default ProfilePage;
