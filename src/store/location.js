import { create } from 'zustand';
import { locations } from '#/constants';

const useLocationStore = create((set) => ({
    activeLocation: locations.work, // Set "Work" as the default location
    setActiveLocation: (location) => set({ activeLocation: location }),
}));

export default useLocationStore;