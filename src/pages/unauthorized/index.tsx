import React from "react"
import Button from "../../components/button"
import "./style.css"

export default function UnauthorizedPage(props: any) {
  console.log("props", props)

  return (
    <div className="unauthorized-page">
      <p>Faltaram as devidas permissões para você estar aqui, amigo</p>
      <Button label="ir para começo" routerLink="/" />
    </div>
  )
}
