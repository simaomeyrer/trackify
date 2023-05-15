import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { DateTime } from "luxon"
import { sessionStore } from "../../store/session"
import { userStore } from "../../store/user"
import { fetchTop } from "../../services/profile"
import { createPlaylist as create, addTracks } from "../../services/playlist"
import { TopSeveral } from "../../services/profile/types"
import SeveralTop from "../../components/several-top"
import Button from "../../components/button"
import "./style.css"

export default function TopTracksPage() {
  const [topTracks, setTopTracks] = useState<TopSeveral>()
  const [session, setSession] = useRecoilState(sessionStore)
  const [user, setUser] = useRecoilState(userStore)
  const [trackUris, setTrackUris] = useState<string[]>([])
  const navigate = useNavigate()

  async function createPlaylist() {
    const content = {
      name: "Mais ouvidas do mês",
      description: `Essas são as suas músicas mais ouvidas do mês de ${DateTime.now().monthLong?.toLocaleLowerCase()}`,
      public: true,
    }
    const playlist = await create(user?.display_name!, session.accessToken!, content)
    if (playlist) {
      await addTracks(playlist.id, session.accessToken!, { uris: trackUris })
      navigate({ pathname: "/playlist", search: `?playlist_id=${playlist.id}` })
    }
  }

  function RenderTopSeveralTracks() {
    return (
      <div className="top-tracks">
        {topTracks?.items.map(({ name, artists }, index) => {
          return (
            <SeveralTop type="tracks" name={name} artists={artists} position={index} key={index} />
          )
        })}
      </div>
    )
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
  return (
    <div className="container">
      {topTracks && (
        <>
          <h2>Suas top 10 músicas deste mês</h2>
          <RenderTopSeveralTracks />
          <div className="create-playlist">
            <Button blockWidth label="Criar Playlist" action={() => createPlaylist()} />
          </div>
        </>
      )}
    </div>
  )
}
