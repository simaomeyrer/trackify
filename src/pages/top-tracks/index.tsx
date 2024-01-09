import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil"
import { DateTime } from "luxon"
import { sessionStore } from "../../store/session"
import { mainStore } from "../../store/main"
import { currentUser } from "../../store/user"
import { topTracksData } from "../../store/tracks"
import { createPlaylist as create, addTracks } from "../../services/playlist"
import Header from "../../components/header"
import TopItemsImgGenerator from "../../components/top-items-img-generator"
import "./style.css"
import { t } from "i18next"

export default function TopTracksPage() {
  const [session, setSession] = useRecoilState(sessionStore)
  const [main, setMainStore] = useRecoilState(mainStore)
  const user = useRecoilValue(currentUser)
  const topTracks = useRecoilValue(topTracksData)
  const navigate = useNavigate()

  async function createPlaylist() {
    const month = t(DateTime.now().monthLong?.toLowerCase() ?? "")
    const content = {
      name: ` ${t("Top 10 músicas do mês")} - ${month}`,
      description: `${t(
        "Aqui estão suas músicas mais tocadas de"
      )} ${month} - by Top Tunes Discover`,
      public: true,
    }

    try {
      setMainStore({ loading: true })
      const playlist = await create(user?.id!, session.accessToken!, content)
      if (playlist) {
        const uris = topTracks.items.map((item) => item.uri)
        await addTracks(playlist.id, session.accessToken!, { uris })
        navigate({ pathname: "/playlist", search: `?playlist_id=${playlist.id}` })
      }
    } catch (error) {
      navigate("/error")
    } finally {
      setMainStore({ loading: false })
    }
  }

  return (
    <div className="top-tracks">
      <Header />
      <TopItemsImgGenerator
        type="tracks"
        topSeveral={topTracks}
        createPlaylistAction={createPlaylist}
      />
    </div>
  )
}
