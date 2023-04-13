import { IUser } from '../atoms/auth';
import { INation } from 'types/Tree';

export interface INotification {
  uuid: string;
  type: string;
  title: INation;
  content: INation;
  contentUuid: string;
  isRead: boolean;
  updatedAt: string;
  fromUser: IUser;
}

export const NotificationType = {
  notice: { type: '공지', src: '/assets/notifications/notice.svg' },
  friendRequest: { type: '친구 요청', src: '/assets/notifications/friend.svg' },
  friendAccepted: { type: '친구', src: '/assets/notifications/friend.svg' },
  friendInteraction: { type: '나무', src: '/assets/notifications/tree.svg' },
  issuedCoupon: { type: '나무 쿠폰', src: '/assets/notifications/tree.svg' },
  communityLiked: { type: '좋아요', src: '/assets/notifications/community.svg' },
  communityCommented: { type: '댓글', src: '/assets/notifications/community.svg' },
  communityReplied: { type: '대댓글', src: '/assets/notifications/community.svg' },
} as any;
