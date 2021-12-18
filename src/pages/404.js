import React from "react"
import { Link } from "gatsby"
import SEO from "../components/SEO"

const Error = () => {
  return (
    <>
      <SEO title="404" description="Zadzwoń ☎ 506 870 672. Agencja Interaktywna"/>
      <div className="error-page">
        <div>
          <h2>404</h2>
          <h5>Przepraszamy, ale strona której szukasz nie istnieje. Naciśnij przycisk poniżej aby wrócić do strony głównej.</h5>
          <Link to="/" className="link link--kale">Wróć na główną</Link>
        </div>
      </div>
    </>
  )
}

export default Error
