import React from "react"
import StaticContent from "../../components/static-content"
import "./style.css"

function PrivacyPolice() {
  return (
    <StaticContent title="Politica de privacidade">
      <>
        <p>
          Todos os dados expostos aqui são provenientes da{" "}
          <a href="https://developer.spotify.com/documentation/web-api" target="blank">
            API Web
          </a>{" "}
          pública do Spotify e não sofrem quaisquer tipo de manipulação.
        </p>
        <p>Nenhum tipo de dado, imagem e afins são salvos para uso posterior ou de terceiros.</p>
        <p>
          Ao logar com sua conta do Spotify você concorda com os termos de uso do Spotify e concede
          acesso aos dados de perfil, músicas e artistas mais ouvidos.
        </p>
        <p>
          Caso queira remover as permissões concedidas ao Top Tunes você pode acessar sua{" "}
          <a href="https://www.spotify.com/us/account/apps/" target="blank">
            páginas de aplicativos
          </a>{" "}
          no Spotify.
        </p>
        <p>
          O Top Tunes Discover foi desenvolvido por quem gosta de música para compartilhar com quem
          também gosta de música, a
        </p>
      </>
    </StaticContent>
  )
}

export default PrivacyPolice
