import { create } from "zustand";
import { persist } from "zustand/middleware";

const useBearsStore = create(
  persist(
    (set) => ({
      menuValue: "0",
      setMenuValue: (value) => set({ menuValue: value }),
      buttonValue: "0",
      setButtonValue: (value) => set({ buttonValue: value }),
      lastClickedMarker: {
        lat: 0,
        lng: 0,
      },
      setLastClickedMarker: (lat, lng) =>
        set({ lastClickedMarker: { lat, lng } }),
    }),
    {
      name: "bears-storage",
      partialize: (state) => ({
        menuValue: state.menuValue,
        buttonValue: state.buttonValue,
      }),
    }
  )
);

export default useBearsStore;
