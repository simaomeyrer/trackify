import React from "react"
import StaticContent from "../components/static-content"

function About() {
  return (
    <StaticContent title="Sobre o Top Tunes Discover">
      <>
        <p>O Top Tunes Discover foi desenvolvido por quem gosta de música e tecnologia!</p>
        <h2>
          Os dados apresentados nas seções de músicas e artistas mais ouvidos são obtidos de qual
          local?
        </h2>
        <p style={{ marginTop: "unset" }}>
          A aplicação foi desenvolvida a partir da busca de todos os dados diretamente da{" "}
          <a href="https://developer.spotify.com/documentation/web-api" target="_blank">
            API Web
          </a>{" "}
          do Spotify seguindo todas as normativas e padrões de desenvolvimento requeridos.
        </p>
        <h2>Meus artistas e/ou músicas mais ouvidas parecem não fazer sentido:</h2>
        <p style={{ marginTop: "unset" }}>
          Exato, apesar dos dados serem provenientes diretamente do Spotify a inconsistência de
          músicas/artistas mais ouvidos pode ocorrer pois o período que é utilizado nas buscas é
          algo aproximado (cerca de 4 semanas) e não exato.
        </p>
      </>
    </StaticContent>
  )
}

export default About
