

import { create } from "zustand";
import { IMeData } from "./interface";
import { createJSONStorage, persist } from 'zustand/middleware';


interface UserStore {
    user: IMeData | null;
    setUser: (user: IMeData) => void;
    // storage: any;
}

// export const useUserStore = create<UserStore>(persist(
//     (set) => ({
//     user: null,
//     setUser: (user: IMeData) => set({ user }),
// }),
// {
//     name: 'user', // key to use in localStorage
//     getStorage: () => localStorage, // using localStorage to persist
//   }
// ));

 export const useUserStore = create<UserStore>()(
    persist(
      (set) => ({
        user: null,
        setUser: (user: IMeData) => set({ user }),
      }),
      {
        name: 'user', // key to use in localStorage
        storage: createJSONStorage(() => sessionStorage), // using localStorage to persist
      }
    )
  );
