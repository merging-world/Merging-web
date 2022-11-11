import styled from '@emotion/styled';

interface ProfileProps {
  url: string;
  info: string;
  size?: number;
  clickProfile?: () => void;
}

interface ImageProps {
  size: number;
}

const Profile = ({ url, info, clickProfile, size }: ProfileProps) => {
  return (
    <>
      <ProfileImage alt={info} src={url} onClick={clickProfile} size={size ?? 34} />
    </>
  );
};

export const ProfileImage = styled.img<ImageProps>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  object-fit: cover;
  border-radius: ${props => props.size / 2}px;
`;

export default Profile;
