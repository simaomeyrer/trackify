import React, { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { topArtistsData } from "../../store/artists"
import Header from "../../components/header"
import TopTracksImgGenerator from "../../components/top-items-img-generator"
import { updateMetaTags } from "../../helpers/updateMetaTags"
import "./style.css"

export default function TopArtists() {
  const topArtists = useRecoilValue(topArtistsData)

  useEffect(() => {
    updateMetaTags("Top 10 artistas do mês")
  })

  return (
    <div className="top-artists">
      <Header />
      <TopTracksImgGenerator type="artists" topSeveral={topArtists} />
    </div>
  )
}
