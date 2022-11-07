export interface CommunityCard {
  commentCount: number;
  content: string;
  createdAt: string;
  image: Image;
  isLiked: boolean;
  isScraped: boolean;
  likeCount: number;
  scrapCount: number;
  status: string;
  tags: Array<Tag>;
  title: string;
  type: string;
  updatedAt: string;
  user: User;
  userUuid: string;
  uuid: string;
}

export interface Image {
  url: [string];
}

export interface Tag {
  name: string;
}

export interface User {
  uuid: string;
  nickname: string;
  githubName: string;
}

export interface Icon {
  color: string;
  width?: number;
  height?: number;
}
