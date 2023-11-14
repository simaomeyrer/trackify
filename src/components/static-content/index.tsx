import React from "react"
import Header from "../header"
import AppFooter from "../app-footer"
import "./style.css"

function StaticContent(props: { title: string; children: JSX.Element }) {
  return (
    <>
      <Header />
      <section className="static-content">
        <header className="static-header">
          {props.title ? <h1 className="static-title">{props.title}</h1> : null}
        </header>
        {props.children}
      </section>
      <AppFooter noLogo withCredits />
    </>
  )
}

export default StaticContent
