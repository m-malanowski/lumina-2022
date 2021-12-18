import React from "react"
import Footer from "../components/Footer"
import { Helmet } from "react-helmet"
import SEO from "../components/SEO"
import Worldwide from "../components/Worldwide"

const Kontakt = () => {
  return (
    <>
      <SEO title="LUMINA STUDIO | Kontakt. Darmowa Wycena - Strony Internetowe. Tworzenie Stron Internetowych"
           description="Zadzwoń I Umów Się Na Bezpłatną Konultację. Tel. 506 870 672. Sklepy internetowe. Projektowanie I Tworzenie Sklepów Internetowych, Profesjonalny Sklep Internetowy"
        // schemaMarkup={schema}
      />
      <Helmet bodyAttributes={{
        id: 'contact-page'
      }}   />

      <Footer />

      <Worldwide />

    </>
  )
}

export default Kontakt
