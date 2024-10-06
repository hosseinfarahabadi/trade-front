

import { create } from "zustand";
import { IMeData } from "./interface";


interface UserStore {
    user: IMeData | null;
    setUser: (user: IMeData) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user: IMeData) => set({ user }),
}));
