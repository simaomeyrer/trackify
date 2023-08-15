import React, { useEffect, useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { useRecoilState } from "recoil"
import { mainStore } from "../../store/main"
import { sessionStore } from "../../store/session"
import { getPlaylist } from "../../services/playlist"
import { Playlist } from "../../services/playlist/types"
import SeveralTop from "../../components/several-top"
import LoadingSpinner from "../../components/loading-spinner"
import Header from "../../components/header"
import "./style.css"

export default function CreatedPlaylist() {
  const navigate = useNavigate()
  const [main, setMainStore] = useRecoilState(mainStore)
  const [session, setSession] = useRecoilState(sessionStore)
  const [playlist, setPlaylist] = useState<Playlist>()
  const [searchParams, setSearchParams] = useSearchParams()
  const playlistId = searchParams.get("playlist_id")!

  useEffect(() => {
    async function getProfile() {
      setMainStore({ loading: true })
      try {
        setPlaylist(await getPlaylist(playlistId, session.accessToken!))
      } catch (error) {
        console.error(error)
        navigate("/error")
      } finally {
        setMainStore({ loading: false })
      }
    }
    getProfile()
  }, [])

  return main.loading ? (
    <LoadingSpinner />
  ) : (
    <div className="container">
      <Header />
      <div className="playlist">
        <div className="playlist-image">
          <img src={playlist?.images[0].url} className="playlist-image" alt="playlist image" />
        </div>
        <div className="playlist-content">
          <h2 className="playlist-title">{playlist?.name}</h2>
          <small className="playlist-description">{playlist?.description}</small>
          <div className="playlist-tracks">
            {playlist?.tracks.items.map(({ track }) => {
              return (
                <SeveralTop
                  key={track.id}
                  name={track.name}
                  image={track.album.images[0].url}
                  artists={track.artists}
                  type="tracks"
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
