import { useRecoilValue } from "recoil"
import { useTranslation } from "react-i18next"
import { currentUser } from "../../store/user"
import Button from "../../components/button"
import Header from "../../components/header"
import { Image } from "../../types/types"
import "./style.css"

export default function Profile() {
  const { t } = useTranslation()
  const user = useRecoilValue(currentUser)

  function userImage() {
    const byBiggest = (a: Image, b: Image) => {
      if (a.width < b.width) return 1
      if (a.width > b.width) return -1
      return 0
    }
    const userImages = user?.images.slice().sort(byBiggest)
    return userImages?.length
      ? userImages[0].url
      : `https://ui-avatars.com/api/?name=${user?.display_name}&size=155`
  }

  return (
    <div className="profile">
      <Header />
      <div className="profile-img">
        <img loading="lazy" src={userImage()} alt={user?.display_name} />
      </div>
      <div className="profile-header">
        <h1>
          {`${t("Olá")}, `}
          <a href={user?.external_urls.spotify} target="_blank">
            {user?.display_name}
          </a>
        </h1>
        <h3>{t("Escolha o que você quer ver por aqui")}:</h3>
      </div>
      <div className="actions">
        <Button label={t("Músicas mais tocadas")} routerLink="/top-tracks" blockWidth />
        <Button label={t("Artistas mais ouvidos")} routerLink="/top-artists" blockWidth />
      </div>
    </div>
  )
}
