import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { fetchProfile } from "../../services/profile"
import { UserProfile } from "../../services/profile/types"
import "./style.css"
import Button from "../../components/button"

export default function Profile() {
  const [profile, setProfile] = useState<UserProfile>()
  const navigate = useNavigate()

  useEffect(() => {
    async function getProfile() {
      try {
        if (localStorage.getItem("access_token")) {
          setProfile(await fetchProfile(localStorage.getItem("access_token")!))
        }
      } catch (error) {
        console.error(error)
        navigate("/error")
      }
    }
    getProfile()
  }, [])

  return (
    <div className="profile">
      <div className="profile-img">
        <img src={profile?.images[0].url} alt={profile?.display_name} />
      </div>
      <div className="profile-header">
        <h1>
          {`Olá, `}
          <a href={profile?.external_urls.spotify} target="_blank">
            {profile?.display_name}
          </a>
        </h1>
        <h3>Músicas mais ouvidas no último mês:</h3>
      </div>
      <div className="actions">
        <Button label="Músicas mais ouvidas" routerLink="/top-tracks" blockWidth />
        <Button label="Artistas mais ouvidos" routerLink="/top-artists" blockWidth />
      </div>
    </div>
  )
}
