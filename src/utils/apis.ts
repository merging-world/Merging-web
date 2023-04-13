import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authState } from '../atoms/auth';
import { API_ENDPOINT } from 'constants/index';
import { CommunityCard } from 'types/Community';
// import { Template } from 'types/template';

export const getCommunity = async () => {
  const response = await axios.get<CommunityCard[]>(`${API_ENDPOINT}/community`);
  const data = await response.data;
  return data;
};

export const getComponentTags = async () => {
  const response = await axios.get(`${API_ENDPOINT}/component_tags`);
  const data = await response.data;
  return data;
};

// export const getTemplates = async () => {
//   const response = await axios.get<Template[]>(`${API_ENDPOINT}/template`);
//   const data = await response.data;
//   return data;
// };

export const likeComponent = async (id: number) => {
  await axios.put(`${API_ENDPOINT}/component/update/${id}`);
};

export const likeTemplate = async (id: number) => {
  await axios.put(`${API_ENDPOINT}/template/update/${id}`);
};

export const checkAndRegister = async (token: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const nicknameCheck = async (token: string, nickname: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/user/check?nickname=${nickname}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const updateNickname = async (token: string, nickname: string) => {
  try {
    const res = await axios.patch(
      `${API_ENDPOINT}/user/nickname`,
      {
        nickname: nickname,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCurrentSeason = async () => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/tree/season`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getMyCurrentTree = async (token: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/tree`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCommits = async (token: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/commit`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getRank = async (token: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/friend/rank`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const postInteraction = async (
  token: string,
  type: string,
  userUuid: string,
  treeUuid: string,
) => {
  try {
    const res = await axios.post(
      `${API_ENDPOINT}/friend/interaction`,
      {
        type: type,
        userUuid: userUuid,
        treeUuid: treeUuid,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getPopularTags = async () => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/community/popular/tag`, {});
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getPopularPosts = async () => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/community/popular?take=5&skip=0`, {});
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getTreeBook = async (token: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/tree/book`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getFriend = async (token: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/friend`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getUserPostsCount = async (userUuid: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/community/user/${userUuid}/count`);
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNotifications = async (token: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/notification`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};

export const getNotificationsCount = async (token: string) => {
  try {
    const res = await axios.get(`${API_ENDPOINT}/notification/unread`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (e) {
    console.log(e);
  }
};
