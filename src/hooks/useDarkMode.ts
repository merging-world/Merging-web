import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { lightTheme, darkTheme, ColorTheme } from '../styles/theme';
import { darkModeState } from 'atoms';

export const useDarkMode = () => {
  const [theme, setTheme] = useRecoilState(darkModeState);
  const setMode = (mode: ColorTheme) => {
    if (mode === lightTheme) {
      window.localStorage.setItem('theme', 'light');
    } else {
      window.localStorage.setItem('theme', 'dark');
    }
    setTheme({ ...theme, colors: mode });
  };

  const toggleTheme = () => {
    if (theme.colors === lightTheme) {
      setMode(darkTheme);
    } else {
      setMode(lightTheme);
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    if (localTheme !== null) {
      if (localTheme === 'dark') {
        setTheme({ ...theme, colors: darkTheme });
      } else {
        setTheme({ ...theme, colors: lightTheme });
      }
    }
  }, []);

  return { theme, toggleTheme };
};
