import StaticContent from "../../components/static-content"

export default function Blog() {
  return (
    <div>
      <StaticContent title="Como ver as músicas e artistas mais ouvidos no Spotify?">
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p>
            Se você é apaixonado por música, provavelmente adora saber quais são seus artistas e
            músicas mais ouvidos no Spotify. Agora imagine poder compartilhar essas informações de
            uma maneira única e visual no Instagram.
          </p>
          <p>
            Aqui vamos ensinar como você pode facilmente ver seus dados e criar imagens
            personalizadas com suas músicas favoritas!
          </p>
          <b>Passo a Passo:</b>
          <ol>
            <li>
              <a href="https://www.toptunes.com.br/">Acesse TopTunes.</a>
            </li>
            <li>Conecte sua conta Spotify.</li>
            <li>Selecione ver músicas ou artistas favoritos.</li>
            <li>Clique em "Baixar Imagem"</li>
            <li>
              Pronto! Agora é só compartilhar nos seus Stories e mostrar a todos o que você está
              ouvindo.
            </li>
          </ol>
        </div>
      </StaticContent>
    </div>
  )
}
