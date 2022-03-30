import React from "react"
import TriggerText from "./TriggerText"
import project from "../assets/imgs/elo5.png"

const SuperNewIndexProjects = () => {
  return <>
    <section className="projects">
      {/*<div className="new-subsec-body">*/}
      {/*  <span className="subsec-title">Usługi</span>*/}
        {/*<p className="subsec-body__description">*/}
        {/*  Brooklyn man bun intelligentsia selfies shaman, flannel. Ramps*/}
        {/*  church-key umami dreamcatcher jean chips  next level brooklyn marfa VHS bitters scen.*/}
        {/*</p>*/}
      {/*</div>*/}
      <span className="subsec-title">Some our works <br /> to keep an eye on</span>

      <h2 className="projects__title"><span>01</span> Carra</h2>
      <h2 className="projects__title"><span>02</span>Kopelat</h2>
      <h2 className="projects__title"><span>034</span>Radca Tomczak</h2>
      <h2 className="projects__title"><span>04</span>Malva</h2>
      <h2 className="projects__title"><span>05</span>Latyński</h2>
      <h2 className="projects__title"><span>06</span>Adwokat Mikulak</h2>

      <img src={project} alt=""  className="projects__img"/>

    </section>

  </>
}

export default SuperNewIndexProjects
