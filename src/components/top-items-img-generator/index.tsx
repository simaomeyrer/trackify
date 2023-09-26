import React, { useCallback, useRef } from "react"
import { useRecoilState } from "recoil"
import { toPng } from "html-to-image"
import { mainStore } from "../../store/main"
import SeveralTop from "../several-top"
import Button from "../button"
import "./style.css"
import SpotifyLogo from "../spotify-logo"
import { TopSeveral } from "../../services/profile/types"

export default function TopItemsImgGenerator(props: {
  topSeveral: TopSeveral
  type: "tracks" | "artists"
}) {
  const [main, setMainStore] = useRecoilState(mainStore)
  const ref = useRef<HTMLDivElement>(null)

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return
    }

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
  }, [ref])

  console.log(props.type)

  return (
    <div className="top-tracks-container">
      <div className="top-tracks-content" ref={ref}>
        <h2 className="top-tracks-content-title">Top 10 {props.type} of the month</h2>
        <div className="tracks">
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
        <div className="app-footer">
          <SpotifyLogo color="green" />
          <div className="app-footer-info">
            <small style={{ opacity: 0.8 }}>Generated by Top Tunes Discover</small>
            <small style={{ opacity: 0.8 }}>https://trackify-peach.vercel.app</small>
          </div>
        </div>
      </div>
      <div className="action-buttons">
        <Button
          disabled={main.loading}
          blockWidth
          label="Download image"
          action={() => onButtonClick()}
        />
        <Button disabled={main.loading} blockWidth label="Create a playlist" action={() => {}} />
      </div>
    </div>
  )
}