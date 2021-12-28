import React, { useCallback, useLayoutEffect  } from "react"
import { useEffect, useState } from "react"
import TriggerText from "../components/TriggerText"
import TriggerLine from "./TriggerLine"
import ProjectsData from "./ProjectsData"
import { Link } from "gatsby"
import TriggerImg from "./TriggerImg"
import trueStar from "../assets/icons/true-star.svg"
import GlobeWithStars from "./GlobeWithStars"


const useMousePosition = () => {
  const [ mousePosition, setMousePosition ] = React.useState({x:0,y:0})

  useEffect(()=>{

    const updateMousePosition = event => {
      setMousePosition({x: event.clientX, y: event.clientY})
    }
    window.addEventListener('mousemove', updateMousePosition)

    return () => window.removeEventListener('mousemove',updateMousePosition)
  }, [])

  return mousePosition;
}

const getDimensionObject = node => {
  const rect = node.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height
  }
}

  const useSize = () => {
    const [ dimensions, setDimensions] = useState({});
    const [ node, setNode ] = useState(null);

    const ref = useCallback(node => {
      setNode(node)
    }, [])

    useLayoutEffect(()=>{
      if(node){
        const measure = () => setDimensions(getDimensionObject(node))
        measure()
      }
    }, [node])
    return [ref, dimensions]
  }


const ProjectsSubsection = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1)
  const { x, y } = useMousePosition();
  // console.log(x, y)
  return (
    <>
      {/*<ImgPlane/>*/}
      <section className="section-more-projects" >

        <div className="new-subsec-body">
          <div className="subsec-span-wprapper">

            <TriggerImg>
              {/*<div className="star"></div>*/}
              <img className='rotating-star' src={trueStar} width={30} alt="" />
            </TriggerImg>

            <TriggerText threshold=".35" delay=".35">
              <span
                data-scroll
                data-scroll-speed="-3.5"
                className="subsec-span">
                   Projekty
              </span>
            </TriggerText>
          </div>
          <TriggerText threshold=".45" delay=".35">
            <p
              data-scroll
              data-scroll-speed="-.5"
            >
              Brooklyn man bun intellige dard slow-carb flannel. Ramps
              church-key umami dreamcatcher <em>jean chips </em>
            </p>

          </TriggerText>
        </div>

        <GlobeWithStars/>

        {/*<div className="subsec-header">*/}
        {/*  <TriggerText threshold=".5" delay=".5">*/}
        {/*    <h2 className="subsec-title">Projekty</h2>*/}
        {/*    /!*<br />*!/*/}
        {/*    /!*<p>Zapoznaj się z artykułami</p>*!/*/}
        {/*  </TriggerText>*/}
        {/*  <TriggerText threshold=".5" delay=".5">*/}
        {/*    <span className="">01.</span>*/}
        {/*  </TriggerText>*/}
        {/*</div>*/}

        <div className="works-page-projects-wrapper">

          {ProjectsData.map(({title, year, imgPath, services}, index) => (
            <Desc key={index}  title={title} year={year} imgPath={imgPath} services={services} setActiveIndex={setActiveIndex} index={index} />
          ))}

          <div className="project-img">
            {ProjectsData.map(({src,alt}, index) => {
              const isActive = index === activeIndex;
              const xPos = isActive ? x : 0;
              const yPos = isActive ? y : 0;

              return  <Image key={index} alt={alt} src={src} active={isActive} x={xPos} y={yPos}/>
            })}
          </div>

        </div>
      </section>
    </>
  )
}

export const Desc = ({title, year, services, imgPath, setActiveIndex, index}) => {
  return(
    <div>
      <div className="more-projects-single"
           onMouseEnter={()=>setActiveIndex(index)}
           onMouseLeave={()=>setActiveIndex(-1)}
      >
        <TriggerLine threshold=".5" delay=".5">
          <hr className="animated" />
        </TriggerLine>
        <div className="more-left">
          <TriggerText threshold=".5" delay=".5">
            <span>{services}</span>
          </TriggerText>
          {/*<TriggerText threshold=".5" delay=".5">*/}
          {/*  <h5><Link to={imgPath}>{title}</Link></h5>*/}
          {/*</TriggerText>*/}
        </div>
        <TriggerText threshold=".5" delay=".5" cName={"more-right"}>
          <Link to={imgPath}><h5>{title}</h5></Link>
        </TriggerText>
        {/*<TriggerText threshold=".5" delay=".5">*/}
          {/*<p className="more-right">{services}</p>*/}
        {/*</TriggerText>*/}
      </div>

      {/*<TriggerLine threshold=".5" delay=".5">*/}
      {/*  <hr className="animated" />*/}
      {/*</TriggerLine>*/}
    </div>
  )
}

export const Image = ({src, active, x, y, alt}) => {
  const [ref, {width, height}] = useSize();
  return(
    <>
      <div className={ active ? 'is-active img-wrapper' : 'no-active img-wrapper'}
           style={{
             transform: `translate(${ x - width/10 }px, ${ y - height/2 }px)`,
           }}
      >
        <img
          width="400px"
          className={ active ? 'is-active' : 'no-active'}
          src={src}
          ref={ref}
          alt={alt}
        />
      </div>
    </>

  )
}

export default ProjectsSubsection
