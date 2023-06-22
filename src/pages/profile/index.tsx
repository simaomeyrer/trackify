import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil"
import { mainStore } from "../../store/main"
import { userStore } from "../../store/user"
import { sessionStore } from "../../store/session"
import { fetchProfile } from "../../services/profile"
import Button from "../../components/button"
import LoadingSpinner from "../../components/loading-spinner"
import "./style.css"

export default function Profile() {
  const [user, setUser] = useRecoilState(userStore)
  const [session, setSession] = useRecoilState(sessionStore)
  const [main, setMainStore] = useRecoilState(mainStore)
  const navigate = useNavigate()

  useEffect(() => {
    async function getProfile() {
      try {
        if (localStorage.getItem("access_token")) {
          if (!user) {
            setMainStore({ loading: true })
            const userProfile = await fetchProfile(session.accessToken!)
            setUser(userProfile)
          }
        }
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
    <div className="profile">
      <div className="profile-img">
        <img loading="lazy" src={user?.images[0].url} alt={user?.display_name} />
      </div>
      <div className="profile-header">
        <h1>
          {`Olá, `}
          <a href={user?.external_urls.spotify} target="_blank">
            {user?.display_name}
          </a>
        </h1>
        <h3>Escolha o que quer ver por aqui:</h3>
      </div>
      <div className="actions">
        <Button label="Músicas mais ouvidas" routerLink="/top-tracks" blockWidth />
        <Button label="Artistas mais ouvidos" routerLink="/top-artists" blockWidth />
      </div>
    </div>
  )
}
