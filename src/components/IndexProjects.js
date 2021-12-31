import React, { useCallback, useLayoutEffect,  Suspense  } from "react"
import { useEffect, useState, useRef } from "react"
import TriggerText from "../components/TriggerText"
import TriggerLine from "./TriggerLine"
import ProjectsData from "./ProjectsData"
import { Link } from "gatsby"

// import { Link } from "gatsby"
// import * as THREE from "three";
// import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
// import { shaderMaterial } from "@react-three/drei";
// import glsl from "babel-plugin-glsl/macro";
//
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
// const Wave = (src) => {
//   const ref = useRef();
//   useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
//
//   const [image] = useLoader(THREE.TextureLoader, [
//     "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"
//
//   ]);
//   {console.log({src})}
//   return (
//     <mesh>
//       <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
//       <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
//     </mesh>
//   );
// };
//
// const Scene = (src) => {
//   return (
//     <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
//       <Suspense fallback={null}>
//         <Wave src={src} />
//       </Suspense>
//     </Canvas>
//   );
// };


const IndexProjects = () => {
  const [activeIndex, setActiveIndex] = React.useState(-1)

  return (
    <>
      <div className="projects-wrapper">

        {ProjectsData.map(({title, year, imgPath, services}, index) => {
          const isActive = index === activeIndex;

          return <Desc key={index} active={isActive} title={title} year={year} imgPath={imgPath}
                       services={services} setActiveIndex={setActiveIndex} index={index} />

        })}

        <div className="project-img">
          {ProjectsData.map(({src,alt}, index) => {
            const isActive = index === activeIndex;

            return  <Image key={index} alt={alt} src={src} active={isActive} />

          })}

        </div>

      </div>
    </>
  )
}


export const Desc = ({title, year, services, imgPath, setActiveIndex, index, active}) => {
  return(
    <div>
      <div
           onMouseEnter={()=>setActiveIndex(index)}
           onMouseLeave={()=>setActiveIndex(-1)}
      >
        <Link
          className={ active ? 'is-active project-title' : 'no-active project-title'}
          to={imgPath} >  <h5>{title} <span>{year}</span></h5> </Link>
      </div>

    </div>
  )
}

export const Image = ({src, active, x, y, alt}) => {
  const [ref, {width, height}] = useSize();
  return(
    <>
      <img
        width="800px"
        className={ active ? 'is-active' : 'no-active'}
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

export default IndexProjects