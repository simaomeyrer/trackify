import React from "react"
import StaticContent from "../../components/static-content"
import Button from "../../components/button"
import "./style.css"

export default function ErrorPage() {
  return (
    <StaticContent title="Algo deu errado" footer={<></>}>
      <div className="error-page">
        <p>Algo deu errado parça, peço que gentilmente clique no botão abaixo para prosseguir</p>
        <Button label="Voltar para o início" routerLink="/" variant="success" />
      </div>
    </StaticContent>
  )
}
