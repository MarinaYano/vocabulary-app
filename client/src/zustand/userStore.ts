import { create } from "zustand";

type UserStoreType = {
  username: string,
  password: string,
  avatar: string,
}

export const useUserStore = create<UserStoreType>(() => ({
  username: "",
  password: "",
  avatar: "",
}))