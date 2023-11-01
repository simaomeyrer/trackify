import React, { useEffect, useState } from "react"
import { Router, useNavigate } from "react-router-dom"
import Icon from "../icon/Icon"
import "./style.css"
import Modal from "../modal"
import Button from "../button"

export default function Logout() {
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useState(false)

  function logOut() {
    window.localStorage.setItem("access_token", "")
    navigate("/")
  }

  function openLogoutModal(val: boolean) {
    setModalOpen(val)
  }

  return (
    <div className="logout" onClick={() => openLogoutModal(true)}>
      <Icon name="close" />
      <Modal show={modalOpen}>
        <Modal.Header>
          <h2 className="modal-title">Você realmente deseja sair?</h2>
        </Modal.Header>
        <Modal.Footer>
          <div className="modal-actions" onClick={() => openLogoutModal(false)}>
            <Button blockWidth variant="inverted" label="sim" action={() => logOut()} />
            <Button
              blockWidth
              variant="primary"
              label="não"
              action={() => openLogoutModal(false)}
            />
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
