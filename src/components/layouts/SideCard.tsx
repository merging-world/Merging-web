import styled from '@emotion/styled';
import React from 'react';
import Card from 'components/layouts/Card';
import { useDarkMode } from 'hooks/useDarkMode';

interface SideCardProps {
  children: React.ReactNode;
  title: string;
  imgSrc: string;
}

const SideCard = ({ children, title, imgSrc }: SideCardProps) => {
  const { theme } = useDarkMode();

  return (
    <Card>
      <TitleBox>
        <TitleIcon src={imgSrc} />
        <Title theme={theme}>{title}</Title>
      </TitleBox>
      {children}
    </Card>
  );
};

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const TitleIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

const Title = styled.h2`
  font-size: ${props => props.theme.fontSize.FONT_H2};
  font-weight: bold;
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

export default SideCard;
