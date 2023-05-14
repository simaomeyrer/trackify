import { atom } from "recoil"
import { TopSeveral } from "../../services/profile/types"

export const topTracksStore = atom<TopSeveral | null>({
  key: "topTracksStore",
  default: null,
})
