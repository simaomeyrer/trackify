import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { DateTime } from "luxon"
import { sessionStore } from "../../store/session"
import { mainStore } from "../../store/main"
import { userStore } from "../../store/user"
import { fetchTop } from "../../services/profile"
import { createPlaylist as create, addTracks } from "../../services/playlist"
import { TopSeveral } from "../../services/profile/types"
import SeveralTop from "../../components/several-top"
import Button from "../../components/button"
import LoadingSpinner from "../../components/loading-spinner"
import SpotifyLogo from "../../components/spotify-logo"
import "./style.css"

export default function TopTracksPage() {
  const [topTracks, setTopTracks] = useState<TopSeveral>()
  const [session, setSession] = useRecoilState(sessionStore)
  const [main, setMainStore] = useRecoilState(mainStore)
  const [user, setUser] = useRecoilState(userStore)
  const [trackUris, setTrackUris] = useState<string[]>([])
  const navigate = useNavigate()

  async function createPlaylist() {
    const month = DateTime.now().monthLong?.toLocaleLowerCase()
    const content = {
      name: `Mais ouvidas do mês - ${month}`,
      description: `Essas são as suas músicas mais ouvidas do mês de ${month} - by Trackify`,
      public: true,
    }

    try {
      setMainStore({ loading: true })
      const playlist = await create(user?.id!, session.accessToken!, content)
      if (playlist) {
        await addTracks(playlist.id, session.accessToken!, { uris: trackUris })
        navigate({ pathname: "/playlist", search: `?playlist_id=${playlist.id}` })
      }
    } catch (error) {
      navigate("/error")
    } finally {
      setMainStore({ loading: false })
    }
  }

  useEffect(() => {
    async function getTopTracks() {
      try {
        if (session.accessToken) {
          const topTracks = await fetchTop("tracks", session.accessToken)
          const uris = topTracks.items.map((item) => item.uri)
          setTopTracks(topTracks)
          setTrackUris(uris)
        }
      } catch (error) {
        console.error(error)
        navigate("/error")
      }
    }
    getTopTracks()
  }, [])

  return topTracks ? (
    <div className="top-tracks">
      <SpotifyLogo />
      <h2 className="top-tracks-title">Suas top 10 músicas deste mês</h2>
      <div className="top-tracks-items">
        {topTracks?.items.map(({ name, artists, external_urls }, index) => {
          return (
            <SeveralTop
              type="tracks"
              name={name}
              artists={artists}
              position={index}
              key={index}
              externalLink={external_urls.spotify}
            />
          )
        })}
      </div>
      <div className="create-playlist">
        <Button
          disabled={main.loading}
          blockWidth
          label="Criar Playlist"
          action={() => createPlaylist()}
        />
      </div>
    </div>
  ) : (
    <LoadingSpinner />
  )
}
