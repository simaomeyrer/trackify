import React, { useEffect } from "react"
import StaticContent from "../../components/static-content"
import { t } from "i18next"

function About() {
  return (
    <StaticContent title={t("Sobre")}>
      <>
        <p>O Top Tunes Discover foi desenvolvido por quem gosta de música e tecnologia!</p>
        <p>
          Atualmente você pode realizar a consulta de artistas/músicas mais ouvidas assim como a
          criação da playlist baseadas num intervalo de cerca de 30 dias.
        </p>
        <p>
          A aplicação foi desenvolvida para matar aquela curiosidade de saber quais são suas
          músicas, bandas e artistas preferidos.
        </p>
        <hr style={{ marginTop: "25px", marginBottom: "25px", border: "" }} />
        <h1 style={{ marginBottom: "26px" }}>FAQ</h1>
        <h2>Como funciona a busca das músicas e artistas mais ouvidos?</h2>
        <p style={{ marginTop: "unset" }}>
          A aplicação foi desenvolvida a partir da busca de todos os dados da{" "}
          <a href="https://developer.spotify.com/documentation/web-api" target="_blank">
            API Web
          </a>{" "}
          do Spotify, seguindo todas as normativas e padrões de desenvolvimento requeridos.
        </p>
        <h2>Meus artistas e/ou músicas mais ouvidas parecem não fazer sentido:</h2>
        <p style={{ marginTop: "unset" }}>
          Apesar dos dados serem provenientes do Spotify a inconsistência de músicas/artistas mais
          ouvidos pode ocorrer pois o período do filtro atual para as buscas é algo aproximado
          (cerca de 4 semanas).
        </p>
      </>
    </StaticContent>
  )
}

export default About
