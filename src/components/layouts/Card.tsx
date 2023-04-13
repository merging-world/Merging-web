import styled from '@emotion/styled';
import React from 'react';
import { useDarkMode } from 'hooks/useDarkMode';

interface CardProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Card = ({ children, onClick }: CardProps) => {
  const { theme } = useDarkMode();

  return (
    <Section theme={theme} onClick={onClick}>
      {children}
    </Section>
  );
};

const Section = styled.section`
  background-color: ${props => props.theme.colors.BACKGROUND_SECONDARY};
  border-radius: 20px;
  box-shadow: 0px 4px 26px ${props => props.theme.colors.SHADOW};
  padding: 20px 20px;
  &:hover {
    cursor: ${props => (props.onClick ? 'pointer' : 'default')};
  }
`;

export default Card;
