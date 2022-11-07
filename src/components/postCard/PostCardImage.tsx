import styled from '@emotion/styled';
import { Image } from 'types/Community';

interface PostCardImageProps {
  imageList: Image;
}

const PostCardImage = ({ imageList }: PostCardImageProps) => {
  return (
    //카러셀 넣어야 함
    <article>
      {imageList.url.map((url: string | undefined) => (
        <img src={url} alt="게시글 이미지입니다." />
      ))}
    </article>
  );
};

export default PostCardImage;
