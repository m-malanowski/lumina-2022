import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useStaticQuery, graphql, Link } from "gatsby"

const ServicesSlider = (props) => {
  const query = useStaticQuery(graphql`
    {
      allStrapiArticles {
        nodes {
          id
          TItle
          Body
          Date
          Slug
          }
      }
    }
  `)


  const [sliderRef] = useKeenSlider({    mode: "free-snap",  slides: { perView: 4, spacing: 50},
    // breakpoints: {
    //   "(max-width: 768px)": {
    //     slidesPerView: 2,
    //     mode: "free-snap",
    //   },
    //   "(max-width: 400px)": {
    //     slidesPerView: 1,
    //     mode: "free-snap",
    //   },
    //   "(max-width: 120px)": {
    //     slidesPerView: 3,
    //     mode: "free-snap",
    //   },
    // },
  })

  return (
    <>
      <div ref={sliderRef} className="keen-slider">


        {query.allStrapiArticles.nodes.map(article => (
          <div key={article.id} className="keen-slider__slide number-slide1 service-slide">
            <Link to={"/artykuly/" + article.Slug}>

            <h5>{article.Date}</h5>
              <div className="ss-bottom">
                <h2>Design</h2>
                <p>{article.TItle}</p>
              </div>
            </Link>
          </div>
        ))}

        <div className="keen-slider__slide number-slide1 service-slide">
          <a href="">
            <h5>11-04-2021</h5>
            <div className="ss-bottom">
              <h2>SEO</h2>
              <p>lorem ipsum coś tam, coś tam</p>
            </div>
          </a>
        </div>
        <div className="keen-slider__slide number-slide2 service-slide">
          <a href="">
            <h5>01-04-2021</h5>
            <div className="ss-bottom">
              <h2>Front End</h2>
              <p>lorem ipsum coś tam, coś tam</p>
            </div>
          </a>
        </div>
        <div className="keen-slider__slide number-slide3 service-slide">
          <a href="">
            <h5>04-03-2021</h5>
            <div className="ss-bottom">
              <h2>Dev Ops</h2>
              <p>Elo Elo trzy dwa zero</p>
            </div>
          </a>
        </div>


      </div>
    </>
  )
}


export default ServicesSlider