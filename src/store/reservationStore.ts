import { create } from 'zustand';

interface ReservationState {
  storeChairId: number;
  startSchedule: string;
  endSchedule: string;
  customUtilizationContents: {
    fieldId: number;
    content: string[];
  }[];
  setChairId: (id: number) => void;
  setSchedule: (start: string, end: string) => void;
  setCustomContent: (fieldId: number, content: string[]) => void;
}

export const useReservationStore = create<ReservationState>((set) => ({
  storeChairId: 1,
  startSchedule: '',
  endSchedule: '',
  customUtilizationContents: [],

  setChairId: (id) => set({ storeChairId: id }),

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
