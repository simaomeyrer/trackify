import { atom, selector } from "recoil"
import { fetchProfile } from "../../services/profile"
import { sessionStore } from "../session"

export const currentUser = selector({
  key: "CurrentUser",
  get: async ({ get }) => {
    const response = await fetchProfile(get(sessionStore).accessToken!)
    return response
  },
})
