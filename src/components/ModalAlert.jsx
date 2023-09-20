import { useState } from "react"
import "./styles/ModalAlert.css"

const ModalAlert = ({alert, setAlert, statusAlert, setStatusAlert}) => {


  if(statusAlert === "create"){
    setAlert(true)
    setStatusAlert()
    
  }

  if(statusAlert === "edit"){
    setAlert(true)
    setStatusAlert()
    
  }

  if(statusAlert === "delete"){
    setAlert(true)
    setStatusAlert()
    
  }


  const handleOk = () => {
    setAlert(false)
  }

  return (
    <div className={`${alert ? 'active_alert' : 'alert'}`}>
        <div className="container_alert">
            <h2 className="alert_title">successful operation!</h2>
            <button className="alert_button" onClick={handleOk}>Ok</button>
        </div>
    </div>
  )
}

export default ModalAlert