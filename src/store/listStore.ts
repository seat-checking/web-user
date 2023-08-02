import { create } from 'zustand';

interface TabProps {
  tab: number;
  setTab: (newTab: number) => void;
}

export const useListTabStore = create<TabProps>((set) => ({
  tab: 0,
  setTab: (newTab) => set({ tab: newTab }),
}));
