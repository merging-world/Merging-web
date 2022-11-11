import styled from '@emotion/styled';
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}
const Container = ({ children }: ContainerProps) => {
  return <ContainerPadding>{children}</ContainerPadding>;
};

export const ContainerPadding = styled.div`
  margin: 86px auto 0 auto;
  max-width: 1040px;
`;

export const Sections = styled.div`
  display: flex;
  padding: 0 16px;
  gap: 16px;
`;

export const MainSection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 6;
  gap: 16px;
`;

export const SideSection = styled.aside`
  display: flex;
  flex-direction: column;
  flex-grow: 4;
  max-width: 360px;
  min-width: 280px;
  gap: 16px;
  ${props => props.theme.breakPoint.small} {
    display: none;
  }
`;

export default Container;
