import { create } from "zustand";
import { Flight } from "../queries";

interface CurrentFlightState {
  currentFlight: Flight | null;
  currentCompany: string | null;
  setCurrentFlight: (flight: Flight | null) => void;
  setCurrentCompany: (currentCompany: string | null) => void;
}

export const useStore = create<CurrentFlightState>()((set) => ({
  currentFlight: null,
  currentCompany: null,
  setCurrentFlight: (currentFlight) =>
    set((state) => ({ ...state, currentFlight: currentFlight })),
  setCurrentCompany: (currentCompany) =>
    set((state) => ({ ...state, currentCompany: currentCompany })),
}));
