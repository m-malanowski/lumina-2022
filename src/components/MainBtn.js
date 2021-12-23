import arrow from "../assets/icons/right-arrow.svg"
import React from "react"
import TriggerText from "../components/TriggerText"

const MainBtn = ({url, title}) => {
  return(
    <TriggerText threshold=".4" delay=".45">
      <div className="main-btn service-title ">
        <a href={url}>
          <h5>{title}</h5>
          <img src={arrow} alt="" width="28px" className="ml-2 align-self-start" />
        </a>
      </div>
    </TriggerText>

  )
}

export default MainBtn