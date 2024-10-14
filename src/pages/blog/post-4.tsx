import StaticContent from "../../components/static-content"

export default function Blog() {
  return (
    <div>
      <StaticContent title="Gerador de Imagem Personalizada do Spotify">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>Transforme Suas Músicas Favoritas em Arte para Compartilhar nas Redes Sociais</p>
          <p>
            No <a href="https://www.toptunes.com.br/">TopTunes</a>, você pode gerar imagens
            estilizadas com suas músicas e artistas favoritos do Spotify, criando conteúdos únicos
            para compartilhar nos Stories, Instagram, Facebook e outras redes.
          </p>
          <p>
            <b>Principais Funcionalidades:</b>
            <td>
              <li>
                Conexão Simples com o Spotify: Apenas faça login e sua playlist será automaticamente
                carregada.
              </li>
              <li>
                Compartilhamento Direto: Depois de criar a imagem, você pode baixar para usar
                diretamente no Instagram ou em outras redes sociais.
              </li>
              <li>Opções de gerador: Por músicas ou artistas mais ouvidos.</li>
            </td>
          </p>
        </div>
      </StaticContent>
    </div>
  )
}
