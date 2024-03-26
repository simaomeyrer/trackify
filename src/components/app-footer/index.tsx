import React from "react"
import SpotifyLogo from "../spotify-logo"
import { t } from "i18next"
import "./style.css"

export default function AppFooter(props: { noLogo?: boolean; withCredits?: boolean }) {
  return (
    <div className="app-footer">
      <div className="app-footer-info">
        <small style={{ opacity: 0.8 }}>Top Tunes Discover</small>
        <small style={{ opacity: 0.8 }}>{window.location.host}</small>
      </div>
      {props.noLogo ? null : <SpotifyLogo color="green" />}
      {props.withCredits ? (
        <small>
          {t("Criado por")}{" "}
          <a href="https://www.linkedin.com/in/sim%C3%A3o-meyrer/" target="_blank">
            Simão Meyrer
          </a>
        </small>
      ) : null}
    </div>
  )
}
