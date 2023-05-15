import React, { useEffect, useState } from "react"
import { useLocation, useNavigate, useSearchParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import { sessionStore } from "../../store/session"
import { getPlaylist } from "../../services/playlist"
import { Playlist } from "../../services/playlist/types"
import SeveralTop from "../../components/several-top"
import "./style.css"

export default function CreatedPlaylist() {
  const navigate = useNavigate()
  const location = useLocation()
  const [session, setSession] = useRecoilState(sessionStore)
  const [playlist, setPlaylist] = useState<Playlist>()
  const [searchParams, setSearchParams] = useSearchParams()
  const playlistId = searchParams.get("playlist_id")!

  useEffect(() => {
    async function getProfile() {
      try {
        setPlaylist(await getPlaylist(playlistId, session.accessToken!))
      } catch (error) {
        console.error(error)
        navigate("/error")
      }
    }
    getProfile()
  }, [])
  return (
    <div className="container">
      <img src={playlist?.images[0].url} className="playlist-image" alt="playlist image" />
      <h2 className="playlist-title">{playlist?.name}</h2>
      <small className="playlist-description">{playlist?.description}</small>
      <div className="tracks">
        {playlist?.tracks.items.map(({ track }, index) => {
          return (
            <SeveralTop
              name={track.name}
              image={track.album.images[0].url}
              artists={track.artists}
              type="tracks"
            />
          )
        })}
      </div>
    </div>
  )
}
