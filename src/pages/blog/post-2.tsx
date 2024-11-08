import React from "react"
import StaticContent from "../../components/static-content"
import tunefindImg from "../../assets/imgs/tunefind.webp"
import tunefindImg2 from "../../assets/imgs/tunefind2.webp"

export default function Blog() {
  return (
    <div>
      <StaticContent title="Tunefind">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>
            Com certeza você já ouviu uma música em algum filme/série e queria muito saber o nome
            pra quando quiser ouvir de novo, né não?
          </p>
          <p>
            O <a href="https://www.tunefind.com/">Tunefind</a> resolve esse problema rapidinho, nele
            você pode buscar por filmes, programas de TV, séries, jogos e até trilha sonora de
            propagandas, esse último recurso está em versão beta.
          </p>
          <img src={tunefindImg} alt="tunefind" loading="lazy" />
          <p>
            Ao buscar por uma série por exemplo ainda é possível saber de qual temporada e episódio
            é a música da trilha sonora
          </p>
          <img src={tunefindImg2} alt="breaking bad" loading="lazy" />
          <p>
            As listas de músicas no Tunefind são criadas a partir de supervisores musicais
            profissionais responsáveis pela seleção de músicas para programas de TV e filmes - ou
            podem ser enviadas por próprios usuários, pessoas apaixonadas por música ou TV.
          </p>
          <p>
            Depois que um usuário do Tunefind envia uma música, toda a comunidade do Tunefind vota
            para melhorar a precisão e assertividade dos envios de músicas.
          </p>
          <p>
            Pois bem, depois dessa, agora você já sabe onde encontrar as músicas dos seus programas
            favoritos.
          </p>
        </div>
      </StaticContent>
    </div>
  )
}
