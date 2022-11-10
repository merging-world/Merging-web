export const interactionList = [
  {
    key: 'poke',
    src: '/assets/interactions/poke.svg',
    name: '콕 찌르기',
    desc: '나무를 콕 찔렀어요',
  },
  {
    key: 'shake',
    src: '/assets/interactions/shake.svg',
    name: '흔들기',
    desc: '나무를 흔들었어요',
  },
  {
    key: 'water',
    src: '/assets/interactions/water.svg',
    name: '물주기',
    desc: '나무에 물을 주었어요',
  },
  {
    key: 'pet',
    src: '/assets/interactions/pet.svg',
    name: '쓰다듬기',
    desc: '나무를 쓰다듬었어요',
  },
];

export interface IInteraction {
  key: string;
  src: string;
  name: string;
  desc: string;
}
