import { create } from 'zustand';

interface ReservationState {
  storeId: number;
  storeChairId: number;
  storeSpaceId: number;
  startSchedule: string;
  endSchedule: string;
  customUtilizationContents: {
    fieldId: number;
    content: string[];
  }[];
  setStoreId: (id: number) => void;
  setChairId: (id: number) => void;
  setSpaceId: (id: number) => void;
  setSchedule: (start: string, end: string) => void;
  setCustomContent: (fieldId: number, content: string[]) => void;
}

export const useReservationStore = create<ReservationState>((set) => ({
  storeId: 1,
  storeChairId: 1,
  storeSpaceId: 1,
  startSchedule: '',
  endSchedule: '',
  customUtilizationContents: [],

  setChairId: (id) => set({ storeChairId: id }),
  setSpaceId: (id) => set({ storeSpaceId: id }),
  setStoreId: (id) => set({ storeId: id }),

  setSchedule: (start, end) => set({ startSchedule: start, endSchedule: end }),

  setCustomContent: (fieldId, content) => {
    set((state) => {
      const updatedContents = state.customUtilizationContents.filter(
        (item) => item.fieldId !== fieldId,
      );
      const newContent = { fieldId, content };
      return {
        customUtilizationContents: [...updatedContents, newContent],
      };
    });
  },
}));
