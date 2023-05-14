import { Playlist, PlaylistAddTrackBody, PlaylistCreateBody } from "./types"

const base = "https://api.spotify.com/v1"

export async function getPlaylist(playlistId: string, token: string): Promise<Playlist> {
  const result = await fetch(base + `/playlists/${playlistId}`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  })

  if (result.status !== 200) throw new Error(`type: ${result.type}`)

  return await result.json()
}

export async function createPlaylist(userId: string, token: string, body: PlaylistCreateBody) {
  const result = await fetch(base + `/users/${userId}/playlists`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  })

  if (result.status !== 201) throw new Error(`type: ${result.type}`)

  return await result.json()
}

export async function addTracks(playlistId: string, token: string, body: PlaylistAddTrackBody) {
  const result = await fetch(base + `/playlists/${playlistId}/tracks`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: JSON.stringify(body),
  })

  if (result.status !== 201) throw new Error(`type: ${result.type}`)

  return await result.json()
}
