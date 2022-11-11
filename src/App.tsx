import { ThemeProvider, Global } from '@emotion/react';
import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from './atoms/auth';
import { firebaseAuth } from 'constants/firebase';
import { useDarkMode } from 'hooks/useDarkMode';
import Router from 'Router';
import GlobalStyle from 'styles/globalStyle';
import { checkAndRegister } from 'utils/apis';

function App() {
  const { theme } = useDarkMode();
  const [auth, setAuth] = useRecoilState(authState);

  useEffect(() => {
    renewalToken();
  }, []);

  const renewalToken = async () => {
    firebaseAuth.currentUser?.getIdToken(true).then(async idToken => {
      if (!idToken) {
        setAuth({
          accessToken: null,
          isValid: false,
          user: null,
        });
        console.log('Network Error');
        return;
      }
      const res = await checkAndRegister(idToken);
      res.nickname
        ? setAuth({
            accessToken: idToken,
            isValid: true,
            user: {
              uuid: res.uuid,
              nickname: res.nickname,
              githubName: res.githubName,
              intro: res.index,
            },
          })
        : setAuth({
            accessToken: idToken,
            isValid: false,
            user: {
              uuid: res.uuid,
              nickname: null,
              githubName: res.githubName,
              intro: res.intro,
            },
          });
    });
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
