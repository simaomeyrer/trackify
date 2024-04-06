import React from "react"
import StaticContent from "../../components/static-content"

export default function Blog() {
  const metaTag = document.getElementsByTagName("meta").item(0)
  metaTag?.setAttribute(
    "description",
    "Always the same music - Nem só de Latino vivem as músicas “iguais”?"
  )
  return (
    <div>
      <StaticContent title="Always the same music">
        <>
          <p>Nem só de Latino vivem as músicas “iguais”?</p>
          <p>
            Tem música da Beyonce com <a href="https://pt.wikipedia.org/wiki/Riff">riff</a> de uma
            banda totalmente desconhecida, tem intro do Charlie Brown Jr. a partir de uma do
            Malibu!? E por aí vai.
          </p>
          <p>
            A playlist{" "}
            <a href="https://open.spotify.com/playlist/6ZTfk1phNvUuJVUZsh6dZj?si=fcb0e4becf3246be">
              Always de same music
            </a>{" "}
            contém várias músicas nessa temática, ela não pode ser ouvida no aleatório e cada música
            tem seu "par", no qual a primeira faixa é a original e a segunda é a que contém algum
            riff, melodia e/ou ritmo baseada na original.
          </p>
          <p>
            Por fim, essa é a minha playlist de curiosidades no mundo das músicas, com sugestões de
            alguns amigos mas sempre baseada na própria experiência sonora.
          </p>
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/6ZTfk1phNvUuJVUZsh6dZj?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </>
      </StaticContent>
    </div>
  )
}
