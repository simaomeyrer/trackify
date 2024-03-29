import { selector } from "recoil"
import { fetchTop } from "../../services/profile"
import { sessionStore } from "../session"

export const topTracksData = selector({
  key: "TopTracks",
  get: async ({ get }) => {
    return await fetchTop("tracks", get(sessionStore).accessToken!)
  },
})
