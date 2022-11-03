import React from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../../atoms/auth';
import { Navbar } from 'components/common';
import Container, { MainSection, Sections, SideSection } from 'components/layouts/Container';
import CommitCalendar from 'components/profile/CommitCalendar';
import CommitCard from 'components/profile/CommitCard';
import TreeCard from 'components/profile/TreeCard';
import { useDarkMode } from 'hooks/useDarkMode';

const ProfilePage = () => {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  return (
    <>
      <Navbar />
      <Container>
        <Sections>
          <MainSection theme={theme}></MainSection>
          <SideSection theme={theme}>
            <TreeCard />
            <CommitCard />
            <CommitCalendar />
          </SideSection>
        </Sections>
        <div style={{ height: '100px' }}></div>
      </Container>
    </>
  );
};

export default ProfilePage;
