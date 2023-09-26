import React from "react"
import { useRecoilValue } from "recoil"
import { topArtistsData } from "../../store/artists"
import Header from "../../components/header"
import TopTracksImgGenerator from "../../components/top-items-img-generator"
import "./style.css"

export default function TopArtists() {
  const topArtists = useRecoilValue(topArtistsData)

  return (
    <div className="top-artists">
      <Header withLogo />
      <TopTracksImgGenerator type="artists" topSeveral={topArtists} />
    </div>
  )
}
