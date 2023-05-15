import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { fetchTop } from "../../services/profile"
import SeveralTop from "../../components/several-top"
import Button from "../../components/button"
import { TopSeveral } from "../../services/profile/types"
import "./style.css"

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
  return (
    <div className="container">
      <h2>Seus top 10 artistas deste mês</h2>
      <div className="top-artists">
        {topArtists &&
          topArtists?.items.map(({ name, artists }, index) => {
            return (
              <SeveralTop
                type="artists"
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