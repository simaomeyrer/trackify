import { atom } from "recoil"
import { UserProfile } from "../../services/profile/types"

export const userStore = atom<UserProfile | null>({
  key: "userStore",
  default: null,
})
