import React from "react"
import StaticContent from "../components/static-content"

function About() {
  return (
    <StaticContent title="Sobre o Top Tunes Discover">
      <>
        <p>O Top Tunes Discover foi desenvolvido por quem gosta de música e tecnologia!</p>
        <p>
          Atualmente está disponível a consulta de artistas/músicas mais ouvidas assim como a
          criação da playlist baseadas num intervalo de cerca de 30 dias.
        </p>
        <p>
          Essa aplicação foi desenvolvida para matar aquela curiosidade de saber quais são suas
          músicas, bandas e artistas preferidos e ainda poder compartilhar nas redes.
        </p>
        <p>A medida do possível a aplicação vai escalar e disponibilizar mais curiosidades.</p>
        <hr style={{ marginTop: "25px", marginBottom: "25px", border: "" }} />
        <h1 style={{ marginBottom: "36px" }}>FAQ</h1>
        <h3>
          Os dados apresentados nas seções de músicas e artistas mais ouvidos são obtidos de qual
          base de dados?
        </h3>
        <p style={{ marginTop: "unset" }}>
          A aplicação foi desenvolvida a partir da busca de todos os dados da{" "}
          <a href="https://developer.spotify.com/documentation/web-api" target="_blank">
            API Web
          </a>{" "}
          do Spotify, seguindo todas as normativas e padrões de desenvolvimento requeridos.
        </p>
        <h3>Meus artistas e/ou músicas mais ouvidas parecem não fazer sentido:</h3>
        <p style={{ marginTop: "unset" }}>
          O correto a afirmar é sim, pode acontecer, apesar dos dados serem provenientes diretamente
          do Spotify a inconsistência de músicas/artistas mais ouvidos pode ocorrer pois o período
          fornecido para as buscas é algo aproximado (cerca de 4 semanas) e não um período exato.
        </p>
      </>
    </StaticContent>
  )
}

export default About
