

import { create } from "zustand";
import { IMeData } from "./interface";
import { createJSONStorage, persist } from "zustand/middleware";


interface UserStore {
    user: IMeData | null;
    setUser: (user: IMeData) => void;
}

// export const useUserStore = create<UserStore>((set) => ({
//     user: null,
//     setUser: (user: IMeData) => set({ user }),
// }));


export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
        user: null,
        setUser: (user: IMeData) => set({ user }),
      }),
      {
        name: 'user', // name of the item in the storage (must be unique)
        storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
      },
    ),
  )