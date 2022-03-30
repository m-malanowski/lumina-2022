import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useStaticQuery, graphql, Link } from "gatsby"
// import arrow from "../assets/icons/right-arrow.svg"
import arrow from "../assets/icons/right-arrow.svg"
import TriggerText from "./TriggerText"

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


  const [sliderRef] = useKeenSlider({    mode: "free-snap",  slides: {  perView: 4, spacing: 50, },
    breakpoints: {
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 25 },
      },
      "(min-width: 1000px)": {
        slides: { perView: 3, spacing: 50 },
      },
      "(min-width: 1366px)": {
        slides: { perView: 4, spacing: 50 },
      },
    },
  })

  return (
    <>
      <section className="articles-subsection">
        <div className="subsec-header">
          <TriggerText threshold=".25" delay=".25">
            <h2 className="subsec-title">Artykuły</h2>
            <br />
            <p>Zapoznaj się z artykułami</p>
          </TriggerText>
          <TriggerText threshold=".25" delay=".25">
            <span className="">03.</span>
          </TriggerText>
        </div>

        <section className="services-page-slider break-out">
          <TriggerText threshold=".25" delay=".3">

            <div ref={sliderRef} className="keen-slider">
              {/*<div  className="keen-slider">*/}

              {/*{query.allStrapiArticles.nodes.map(article => (*/}
              {/*  <div key={article.id} className="keen-slider__slide number-slide1 service-slide">*/}
              {/*    <Link to={"/artykuly/" + article.Slug}>*/}

              {/*    <h5>{article.Date}</h5>*/}
              {/*      <div className="ss-bottom">*/}
              {/*        <h2>Design</h2>*/}
              {/*        <p>{article.TItle}</p>*/}
              {/*      </div>*/}
              {/*    </Link>*/}
              {/*  </div>*/}
              {/*))}*/}

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
              <div className="keen-slider__slide number-slide3 service-slide">
                <a href="">
                  <h5>04-03-2021</h5>
                  <div className="ss-bottom">
                    <h2>Design</h2>
                    <p>Elo Elo trzy dwa zero</p>
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

            </div>

            <div className="slider-buttons">
              <div className="slider-buttons__button slider-buttons__button-left">
                <a href="">
                  <img src={arrow} alt="" width="30px" className="align-self-end service__img test-section__img" />
                </a>
              </div>
              <div className="slider-buttons__button slider-buttons__button-right">
                <a href="">
                  <img src={arrow} alt="" width="30px" className="align-self-end service__img test-section__img" />
                </a>
              </div>
            </div>


          </TriggerText>
        </section>
      </section>

    </>
  )
}


export default ServicesSlider