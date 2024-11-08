import React from "react"
import { useNavigate } from "react-router-dom"
import StaticContent from "../../components/static-content"
import versusImage from "../../assets/imgs/versus.webp"
import preview from "../../assets/imgs/preview.webp"
import preview2 from "../../assets/imgs/preview2.webp"
import personImage from "../../assets/imgs/person_movie.webp"
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
          <div
            className="blog-post"
            onClick={() => navigate("/blog/como-ver-as-musicas-e-artistas-mais-ouvidos-no-spotify")}
          >
            <img className="blog-post-img" src={preview} alt="spider versus" />
            <h2 className="blog-post-title">
              Como Ver as Músicas e Artistas Mais Ouvidos no Spotify
            </h2>
            <p className="blog-post-description">
              Aqui vamos ensinar como você pode facilmente ver seus dados e criar imagens
              personalizadas com suas músicas favoritas!
            </p>
          </div>
          <div
            className="blog-post"
            onClick={() => navigate("/blog/gerador-de-imagem-personalizada-do-spotify")}
          >
            <img className="blog-post-img" src={preview2} alt="spider versus" />
            <h2 className="blog-post-title">Gerador de Imagem Personalizada do Spotify</h2>
            <p className="blog-post-description">
              Aqui vamos ensinar como você pode facilmente ver seus dados e criar imagens
              personalizadas com suas músicas favoritas!
            </p>
          </div>
        </div>
      </StaticContent>
    </div>
  )
}
