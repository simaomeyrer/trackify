import { useRecoilState, useRecoilValue } from "recoil"
import { currentUser } from "../../store/user"
import Button from "../../components/button"
import Header from "../../components/header"
import { Image } from "../../types/types"
import "./style.css"

export default function Profile() {
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
          {`Hello, `}
          <a href={user?.external_urls.spotify} target="_blank">
            {user?.display_name}
          </a>
        </h1>
        <h3>Choose what you want to see:</h3>
      </div>
      <div className="actions">
        <Button label="Most played tracks" routerLink="/top-tracks" blockWidth />
        <Button label="Most listened to artists" routerLink="/top-artists" blockWidth />
      </div>
    </div>
  )
}
