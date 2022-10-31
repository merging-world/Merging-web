import styled from '@emotion/styled';
import React from 'react';
import { useDarkMode } from 'hooks/useDarkMode';

interface CardProps {
  children: React.ReactNode;
}

const Card = ({ children }: CardProps) => {
  const { theme } = useDarkMode();

  return <Section theme={theme}>{children}</Section>;
};

const Section = styled.section`
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  border-radius: 20px;
  box-shadow: 0px 4px 26px ${props => props.theme.colors.SHADOW};
  padding: 20px 16px;
`;

export default Card;
