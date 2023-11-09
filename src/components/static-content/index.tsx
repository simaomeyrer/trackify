import React from "react"
import Header from "../header"
import AppFooter from "../app-footer"
import "./style.css"

function StaticContent(props: { title: string; children: JSX.Element }) {
  return (
    <>
      <Header />
      <section className="static-content">
        {props.title ? <h1>{props.title}</h1> : null}
        {props.children}
      </section>
      <AppFooter noLogo withCredits />
    </>
  )
}

export default StaticContent
