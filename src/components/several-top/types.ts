import { Artist } from "../../services/profile/track/types"

export interface SeveralTopProps {
  type: "tracks" | "artists"
  name: string
  image?: string
  position?: number
  artists?: Artist[]
}
