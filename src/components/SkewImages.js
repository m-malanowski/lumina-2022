import React from "react"
import Pic from "../assets/imgs/project-latynski.png"
import Pic2 from "../assets/imgs/project-carra.png"
import Pic3 from "../assets/imgs/project-elsner.png"
import Pic4 from "../assets/imgs/project-malva.png"


const SkewImages = () => {
  return <>
    <section className="tiles tiles--rotated break-out" id="grid2">
      <div className="tiles__wrap">
        <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2"
             data-scroll-direction="horizontal">
          {/*<div className="tiles__line-img"></div>*/}
          {/*<div className="tiles__line-img"></div>*/}
          {/*<div className="tiles__line-img"></div>*/}
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic2})` }} ></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic2})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic2})` }}></div>
        </div>
        <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2"
             data-scroll-direction="horizontal">
          {/*<div className="tiles__line-img"></div>*/}
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic2})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic4})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic2})` }}></div>
        </div>
        <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2"
             data-scroll-direction="horizontal">
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic3})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic2})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic2})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
        </div>
        <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2"
             data-scroll-direction="horizontal">
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic4})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img"></div>
        </div>
        <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2"
             data-scroll-direction="horizontal">
          <div className="tiles__line-img"></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img" style={{ backgroundImage: `url(${Pic})` }}></div>
          <div className="tiles__line-img"></div>
          <div className="tiles__line-img"></div>
        </div>
      </div>
    </section>
  </>
}

export default SkewImages
