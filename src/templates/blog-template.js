import React from "react"
import { graphql } from "gatsby"
import TriggerImg from "../components/TriggerImg"
import SEO from "../components/SEO"

const ArticlesTemplate = ({data}) => {
  return (
      <>
        <SEO title="LUMINA STUDIO | Realizacje"
             description="Jesteśmy Kreatywną Agencją Interaktywną,  ☎ 506 870 672 ☎  Specjalizujemy Się W Tworzeniu Stron Internetowych Oraz Brandingu"
          // schemaMarkup={schema}
        />
        <div>
          <h1>{data.article.TItle}</h1>

          <h5>{data.article.Body}</h5>
        </div>
      </>
  )
}

export const query = graphql`
  query GetSingleArticle($slug: String) {
    article: strapiArticles(Slug: { eq: $slug }) {
      TItle
      Body
      Date(formatString: "MMMM YYYY", locale: "pl")
    }
  }
`
export default ArticlesTemplate
