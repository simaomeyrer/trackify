import { atom } from "recoil"

interface Session {
  accessToken: string | null
}

export const sessionStore = atom<Session>({
  key: "sessionStore",
  default: { accessToken: localStorage.getItem("access_token") },
})
