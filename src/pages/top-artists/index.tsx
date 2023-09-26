import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchTop } from "../../services/profile"
import { TopSeveral } from "../../services/profile/types"
import SeveralTop from "../../components/several-top"
import LoadingSpinner from "../../components/loading-spinner"
import Header from "../../components/header"
import "./style.css"
import TopTracksImgGenerator from "../../components/top-items-img-generator"

export default function TopArtists() {
  const [topArtists, setTopArtists] = useState<TopSeveral>()
  const navigate = useNavigate()

  useEffect(() => {
    async function getTopArtists() {
      try {
        if (localStorage.getItem("access_token")) {
          setTopArtists(
            await fetchTop("artists", localStorage.getItem("access_token")!, {
              limit: 10,
              timeRange: "short_term",
            })
          )
        }
      } catch (error) {
        console.error(error)
        navigate("/error")
      }
    }
    getTopArtists()
  }, [])
  return topArtists ? (
    <div className="top-artists">
      <Header withLogo />
      <TopTracksImgGenerator type="artists" topSeveral={topArtists} />
    </div>
  ) : (
    <LoadingSpinner />
  )
}
