import styled from '@emotion/styled';
import React from 'react';

const PostCardArticle = () => {
  return (
    <Wrap>
      <Title>게시글 제목</Title>
      <ContentsText>
        무야호무야호무야호무야호무야호무야호무야호무야호무야호무야호무야호무야호무야호 무야호 무야호
        무야호 무야호
      </ContentsText>
      <ul>테그</ul>
    </Wrap>
  );
};

const Wrap = styled.section`
  margin: 7px 0 16px 0;
`;

const Title = styled.h2`
  margin-bottom: 8px;
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_HIGH};
`;

const ContentsText = styled.article`
  font-size: ${props => props.theme.fontSize.FONT_BODY1};
  color: ${props => props.theme.colors.TEXT_MEDIUM};
`;

export default PostCardArticle;
