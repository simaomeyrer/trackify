import { UserProfile } from "./types"

type TimeRange = "short_term" | "medium_term" | "long_term"
type Context = "artists" | "tracks"
interface TopTracksFilter {
  timeRange: TimeRange
  limit: number
}

const base = "https://api.spotify.com/v1/me"

export async function fetchProfile(token: string): Promise<UserProfile> {
  const result = await fetch(base, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })

  if (result.status !== 200) throw new Error(`type: ${result.type}`)
  return await result.json()
}

export async function fetchTop(type: Context, token: string, filter: TopTracksFilter) {
  const url = `${base}/top/${type}?time_range=${filter.timeRange}&limit=${filter.limit}`
  const result = await fetch(url, { method: "GET", headers: { Authorization: `Bearer ${token}` } })
  if (result.status !== 200) throw new Error(`type: ${result.type}`)
  return await result.json()
}
