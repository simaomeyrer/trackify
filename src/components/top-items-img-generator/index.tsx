import React, { useCallback, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { toPng } from "html-to-image"
import { mainStore } from "../../store/main"
import SeveralTop from "../several-top"
import Button from "../button"
import { TopSeveral } from "../../services/profile/types"
import AppFooter from "../app-footer"
import "./style.css"

export default function TopItemsImgGenerator(props: {
  topSeveral: TopSeveral
  type: "tracks" | "artists"
  createPlaylistAction?: () => void
}) {
  const [main, setMainStore] = useRecoilState(mainStore)
  const [downloadingImg, setDownloadingImg] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const downloadImage = useCallback(() => {
    if (ref.current === null) {
      return
    }
    setDownloadingImg(true)
    toPng(ref.current, { cacheBust: true, quality: 1 })
      .then((dataUrl) => {
        const link = document.createElement("a")
        link.download = "top-10-tracks.png"
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setDownloadingImg(false)
      })
  }, [ref])

  return (
    <div className="top-container">
      <div className="top-content" ref={ref}>
        <h2 className="top-content-title">Top 10 {props.type} of the month</h2>
        <div className="items">
          {props.type === "tracks"
            ? props.topSeveral.items.map((item, index) => {
                return (
                  <SeveralTop
                    type="tracks"
                    name={item.name}
                    artists={item.artists}
                    position={index}
                    key={index}
                    externalLink={item.external_urls.spotify}
                    image={item.album?.images.find((img) => img.height === 640 || 320 || 160)?.url}
                  />
                )
              })
            : props.topSeveral.items.map((item, index) => {
                return (
                  <SeveralTop
                    type="artists"
                    name={item.name}
                    artists={item.artists}
                    image={item.images.find((img) => img.height === 640 || 320 || 160)?.url}
                    position={index}
                    externalLink={item.external_urls.spotify}
                    key={index}
                  />
                )
              })}
        </div>
        <AppFooter />
      </div>
      <div className="action-buttons">
        <Button
          disabled={downloadingImg}
          blockWidth
          label="Download image"
          action={() => downloadImage()}
        />
        {props.type == "tracks" && (
          <Button
            disabled={main.loading}
            blockWidth
            label="Create a playlist"
            action={props.createPlaylistAction}
          />
        )}
      </div>
    </div>
  )
}
