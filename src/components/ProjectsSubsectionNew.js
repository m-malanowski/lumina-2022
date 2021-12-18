import React, { useCallback, useLayoutEffect,  Suspense  } from "react"
import { useEffect, useState, useRef } from "react"
import TriggerText from "../components/TriggerText"
import TriggerLine from "./TriggerLine"
import ProjectsData from "./ProjectsData"
import { Link } from "gatsby"
//
// import * as THREE from "three";
// import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
// import { shaderMaterial } from "@react-three/drei";
// import glsl from "babel-plugin-glsl/macro";

// const WaveShaderMaterial = shaderMaterial(
//   // Uniform
//   {
//     uTime: 0,
//     uColor: new THREE.Color(0.0, 0.0, 0.0),
//     uTexture: new THREE.Texture()
//   },
//   // Vertex Shader
//   glsl`
//     precision mediump float;
//
//     varying vec2 vUv;
//     varying float vWave;
//
//     uniform float uTime;
//
//     #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);
//
//     void main() {
//       vUv = uv;
//
//       vec3 pos = position;
//       float noiseFreq = 2.0;
//       float noiseAmp = 0.4;
//       vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
//       pos.z += snoise3(noisePos) * noiseAmp;
//       vWave = pos.z;
//
//       gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//     }
//   `,
//   // Fragment Shader
//   glsl`
//     precision mediump float;
//
//     uniform vec3 uColor;
//     uniform float uTime;
//     uniform sampler2D uTexture;
//
//     varying vec2 vUv;
//     varying float vWave;
//
//     void main() {
//       float wave = vWave * 0.2;
//       vec3 texture = texture2D(uTexture, vUv + wave).rgb;
//       gl_FragColor = vec4(texture, 1.0);
//     }
//   `
// );
//
// extend({ WaveShaderMaterial });
//
// const Wave = () => {
//   const ref = useRef();
//   useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
//
//   const [image] = useLoader(THREE.TextureLoader, [
//     "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
//   ]);
//
//   return (
//     <mesh>
//       <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
//       <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
//     </mesh>
//   );
// };
// const Scene = () => {
//   return (
//     <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
//       <Suspense fallback={null}>
//         <Wave />
//       </Suspense>
//     </Canvas>
//   );
// };


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

        <div className="subsec-header mb-5">
          <TriggerText threshold=".5" delay=".5">
            <h5 className="">02.</h5>
          </TriggerText>
          <TriggerText threshold=".5" delay=".5">
            <h2 className="subsec-title">Projekty</h2>
          </TriggerText>
        </div>

        <div className="projects-wrapper">

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

          {/*<Scene />*/}

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
            <span>{year}</span>
          </TriggerText>
          <TriggerText threshold=".5" delay=".5">
            <h5><Link to={imgPath}>{title}</Link></h5>
          </TriggerText>
        </div>
        <TriggerText threshold=".5" delay=".5">
          <p className="more-right">{services}</p>
        </TriggerText>
      </div>

      <TriggerLine threshold=".5" delay=".5">
        <hr className="animated" />
      </TriggerLine>
    </div>
  )
}

export const Image = ({src, active, x, y, alt}) => {
  const [ref, {width, height}] = useSize();
  return(
    <>

      <img
        width="400px"
        className={ active ? 'is-active' : ''}
        src={src}
        ref={ref}
        alt={alt}
        style={{
          transform: `translate(${ x - width/3 }px, ${ y - height/2 }px)`,
        }}
      />
    </>

  )
}

export default ProjectsSubsection
