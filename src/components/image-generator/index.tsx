import React from "react"
import { toPng } from "html-to-image"

export default function ImageGenerator(props: React.PropsWithChildren) {
  const handleGenerateImage = () => {
    const element = document.getElementById("htmlElement")!

    toPng(element, { width: 1080, height: 1980 }).then(function (dataUrl) {
      const link = document.createElement("a")
      link.download = "image.webp"
      link.href = dataUrl
      link.click()
    })
  }

  return (
    <div>
      <button onClick={handleGenerateImage}>Gerar Imagem</button>
      <div id="htmlElement">{props.children}</div>
    </div>
  )
}
