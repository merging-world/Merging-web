import styled from '@emotion/styled';

interface ProfileProps {
  url: string;
  info: string;
  clickProfile?: () => void;
}

const Profile = ({ url, info, clickProfile }: ProfileProps) => {
  return (
    <>
      <ProfileImage alt={info} src={url} onClick={clickProfile} />
    </>
  );
};

export const ProfileImage = styled.img`
  width: 34px;
  height: 34px;
  object-fit: cover;
  border-radius: 17px;
`;

export default Profile;
