import { selector } from "recoil"
import { fetchTop } from "../../services/profile"
import { sessionStore } from "../session"

export const topArtistsData = selector({
  key: "TopArtists",
  get: async ({ get }) => {
    return await fetchTop("artists", get(sessionStore).accessToken!)
  },
})
