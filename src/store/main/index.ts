import { atom } from "recoil"

interface MainStore {
  loading: boolean
}

export const mainStore = atom<MainStore>({
  key: "mainStore",
  default: { loading: false },
})
