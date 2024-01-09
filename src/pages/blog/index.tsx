import React from "react"
import { useNavigate } from "react-router-dom"
import StaticContent from "../../components/static-content"
import versusImage from "../../assets/imgs/versus.jpeg"
import "./style.css"

export default function Blog() {
  const navigate = useNavigate()
  return (
    <div>
      <StaticContent title="Blog">
        <div className="blog">
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
