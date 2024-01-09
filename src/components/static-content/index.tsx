import React from "react"
import Header from "../header"
import AppFooter from "../app-footer"
import "./style.css"

function StaticContent(props: { title: string; children: JSX.Element; footer?: JSX.Element }) {
  return (
    <>
      <Header />
      <section className="static-content">
        <header className="static-header">
          {props.title ? <h1 className="static-title">{props.title}</h1> : null}
        </header>
        {props.children}
      </section>
      {props.footer ? props.footer : <AppFooter noLogo withCredits />}
    </>
  )
}

export default StaticContent
