import { atom } from 'recoil';

export interface IUser {
  uuid: string | null;
  nickname: string | null;
  githubName: string | null;
  intro?: string | null;
}

export interface IAuth {
  accessToken: string | null;
  isValid: boolean | null;
  user: IUser | null;
}

const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = localStorage.getItem(key);

    if (savedValue !== null) {
      setSelf(JSON.parse(savedValue));
    }

    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset ? localStorage.removeItem(key) : localStorage.setItem(key, JSON.stringify(newValue));
    });
  };

export const authState = atom<IAuth>({
  key: `auth`,
  default: {
    accessToken: null,
    isValid: false,
    user: null,
  },
  effects: [localStorageEffect('auth')],
});
