import styled from '@emotion/styled';
import { Paper, Button } from '@mui/material';
import Carousel from 'react-material-ui-carousel';
import { Image } from 'types/Community';

interface PostCardImageProps {
  imageList: Image;
}

const PostCardImage = ({ imageList }: PostCardImageProps) => {
  return (
    //카러셀 넣어야 함
    <Wrap>
      {/* <Carousel> */}
      {imageList.url.map((url, i) => (
        <>
          <img src={url} alt="게시글 이미지입니다." key={i} />
          {/* <Button className="CheckButton">Check it out!</Button> */}
        </>
      ))}
      {/* </Carousel> */}
    </Wrap>
  );
};

const Wrap = styled.article`
  /* max-height: 439px; */
`;

export default PostCardImage;
