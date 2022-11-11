import { MEDIA_QUERY_END_POINT } from 'constants/index';

export const darkTheme = {
  PRIMARY: '#55DB82',
  SECONDARY: '# 38393D',
  PIN: '#F5FF80',
  BACKGROUND: '#161817',
  BACKGROUND_SECONDARY: '#242625',
  ALERT: '#FF7575',
  TEXT_HIGH: '#F0F2F0',
  TEXT_MEDIUM: '#E2E2E2',
  GRAY_1: '#464949',
  GRAY_2: '#878C8A',
  GRAY_3: '#A1A5A3',
  GRAY_4: '#BABFC0',
  GRAY_5: '#EFEFEF',
  SHADOW: '#272C2866',
  SHADOW_SECONDARY: '#161817B3',
  PASTEL_GREEN: '#A7CC8D',
};

export type ColorTheme = typeof darkTheme;

export const lightTheme: ColorTheme = {
  PRIMARY: '#55DB82',
  SECONDARY: '#38393D',
  PIN: '#F5FF80',
  BACKGROUND: '#FCFDFC',
  BACKGROUND_SECONDARY: '#FFFFFF',
  ALERT: '#FF7575',
  TEXT_HIGH: `#38393D`,
  TEXT_MEDIUM: '#808186',
  GRAY_1: '#EFEFEF',
  GRAY_2: '#BABFC0',
  GRAY_3: '#A1A5A3',
  GRAY_4: '#878C8A',
  GRAY_5: '#464949',
  SHADOW: '#B0D6B333',
  SHADOW_SECONDARY: '#B0D6B355',
  PASTEL_GREEN: '#C6E1B4',
};

export type Theme = typeof lightTheme;

const Color = {
  dark: darkTheme,
  light: lightTheme,
};

const mode = 'light' || 'dark';

export const colors = Color[mode];

// font type

export const fontSize = {
  FONT_H1: '26px',
  FONT_H2: '20px',
  FONT_H3: '18px',
  FONT_BODY1: '16px',
  FONT_BODY2: '14px',
  FONT_BODY3: '12px',
  FONT_CAPTION: '12px',
  FONT_OVERLINE: '12px',
};

// MAXIMUM: '640px',
// MINIMUM: '860px',

export const breakPoint = {
  small: `@media (max-width: ${MEDIA_QUERY_END_POINT.SMALL})`,
  medium: `@media (min-width: 769px) and (max-width: ${MEDIA_QUERY_END_POINT.MEDIUM})`,
  large: `@media (min-width: 1041px) and (max-width: ${MEDIA_QUERY_END_POINT.LARGE})`,
  xLarge: `@media (min-width: ${MEDIA_QUERY_END_POINT.LARGE})`,
};

export type BreakPointType = typeof breakPoint;

const theme = {
  colors,
  fontSize,
  breakPoint,
};

export default theme;

export type Font = typeof fontSize;
