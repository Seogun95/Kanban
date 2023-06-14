import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

/* ======= 다크모드 Atom ======= */
const { persistAtom: darkPersist } = recoilPersist({
  key: 'themeLocal',
  storage: localStorage,
});

export const isDarkAtom = atom<boolean>({
  key: 'isDark',
  default: false,
  effects_UNSTABLE: [darkPersist],
});
/* ======= END ======= */

/* ======= Atom Selector 사용 방법 ======= */
export const minuteState = atom<number>({
  key: 'minute',
  default: 0,
});

export const hoursSelector = selector<number>({
  key: 'hours',
  get: ({ get }) => {
    const getMin = get(minuteState);
    const rounded = Number((getMin / 60).toFixed(2));
    return Number.isInteger(rounded) ? Math.round(rounded) : rounded;
  },
  set: ({ set }, newValue) => {
    const minute = Number(newValue) * 60;
    set(minuteState, minute);
  },
});
/* ======= END ======= */

export interface IToDoState {
  [key: string]: string[];
}

const { persistAtom: todoPersist } = recoilPersist({
  key: 'todoLocal',
  storage: localStorage,
});

export const todoDragState = atom<IToDoState>({
  key: 'dropTodo',
  default: {
    '해야할 일': ['하나', '다섯'],
    '하는 중': ['둘'],
    '완 료': ['셋', '넷'],
  },
  effects_UNSTABLE: [todoPersist],
});
