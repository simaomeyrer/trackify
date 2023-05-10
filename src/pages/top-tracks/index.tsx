import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchTop } from "../../services/profile"
import { TopSeveral } from "../../services/profile/types"
import SeveralTop from "../../components/several-top"
import "./style.css"

export default function TopTracksPage() {
  const [topTracks, setTopTracks] = useState<TopSeveral>()
  const navigate = useNavigate()

  useEffect(() => {
    async function getTopTracks() {
      try {
        if (localStorage.getItem("access_token")) {
          setTopTracks(
            await fetchTop("tracks", localStorage.getItem("access_token")!, {
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
    getTopTracks()
  }, [])
  return (
    <div className="container">
      <h2>Suas top 10 músicas deste mês</h2>
      <div className="top-tracks">
        {topTracks &&
          topTracks?.items.map(({ name, artists }, index) => {
            return (
              <SeveralTop
                type="tracks"
                name={name}
                artists={artists}
                position={index}
                key={index}
              />
            )
          })}
      </div>
    </div>
  )
}
