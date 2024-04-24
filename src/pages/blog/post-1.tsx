import React from "react"
import StaticContent from "../../components/static-content"

export default function Blog() {
  return (
    <div>
      <StaticContent title="Always the same music, as músicas 'iguais'">
        <>
          <p>Nem só de Latino vivem as músicas “iguais”?</p>
          <p>
            Você com certeza já deve ter ouvido duas músicas parecidas, músicas com o mesmo sample,
            algum riff de guitarra marcante ou alguma linha de baixo inconfundível, é aí que a
            playlist Always the same music entra na história.
          </p>
          <p>
            Tem música da Beyonce com <a href="https://pt.wikipedia.org/wiki/Riff">riff</a> de uma
            banda totalmente desconhecida, tem intro do Charlie Brown Jr. a partir de uma do Malibu.
          </p>
          <p>
            <a href="https://open.spotify.com/playlist/6ZTfk1phNvUuJVUZsh6dZj?si=fcb0e4becf3246be">
              Always de same music
            </a>{" "}
            contém várias músicas nessa temática, é melhor ouvir ela na sequência pra não estragar a
            experiência e identificar os detalhes, cada música tem o seu "parzinho" de música com
            alguma identificação a original.
          </p>
          <p>
            Por fim, essa é a minha playlist de curiosidades no mundo das músicas "iguais", dá uma
            conferida nela porque tem muita coisa legal com tudo que é tipo de estilo.
          </p>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/6ZTfk1phNvUuJVUZsh6dZj?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </>
      </StaticContent>
    </div>
  )
}
