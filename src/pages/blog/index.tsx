import React from "react"
import { useNavigate } from "react-router-dom"
import StaticContent from "../../components/static-content"
import versusImage from "../../assets/imgs/versus.jpeg"
import personImage from "../../assets/imgs/person_movie.jpg"
import "./style.css"

export default function Blog() {
  const navigate = useNavigate()
  return (
    <div>
      <StaticContent title="Blog">
        <div className="blog">
          <div className="blog-post" onClick={() => navigate("/blog/tunefind")}>
            <img className="blog-post-img" src={personImage} alt="person watching a movie" />
            <h2 className="blog-post-title">Tunefind</h2>
            <p className="blog-post-description">
              Com certeza você já ouviu uma música em algum filme/série e queria muito saber o nome
              pra quando quiser ouvir novamente, né não?
            </p>
          </div>
          <div className="blog-post" onClick={() => navigate("/blog/always-the-same-music")}>
            <img className="blog-post-img" src={versusImage} alt="spider versus" />
            <h2 className="blog-post-title">Always the same music</h2>
            <p className="blog-post-description">
              Tem música da Beyonce com riff de uma banda totalmente desconhecida, tem intro do
              Charlie Brown Jr. a partir de uma do Malibu!?
            </p>
          </div>
        </div>
      </StaticContent>
    </div>
  )
}
