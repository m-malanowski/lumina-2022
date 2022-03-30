import React, { useRef, Suspense } from "react"
import { graphql, Link } from "gatsby"
import arrow from "../assets/icons/right-arrow.svg"
import LowerFooter from "../components/LowerFooter"
import Worldwide from "../components/Worldwide"
import SectionMarquee from "../components/SectionMarquee"
import TriggerText from "../components/TriggerText"
import { LocomotiveScrollProvider } from "react-locomotive-scroll"
import TriggerLine from "../components/TriggerLine"
import TriggerImg from "../components/TriggerImg"
// import smallStar from "../assets/icons/smallStar.svg"
import orbitAboutPage from "../assets/icons/orbitPortfolioPage.svg"
import orbitMoreSection from "../assets/icons/orbitMoreSection.svg"
import SEO from "../components/SEO"
import orbitProcess from "../assets/icons/orbitProcess.png"
import smallStar from "../assets/icons/smallStar.svg"
import IndexProjects from "../components/IndexProjects"
import Foooter from "../components/Foooter"
import ContactSubsec from "../components/ContactSubsec"

import * as THREE from "three";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import ProjectsSubsectionNew from "../components/ProjectsSubsectionNew"

const WaveShaderMaterial = shaderMaterial(
  // Uniform
  {
    uTime: 0,
    uColor: new THREE.Color(0.0, 0.0, 0.0),
    uTexture: new THREE.Texture()
  },
  // Vertex Shader
  glsl`
    precision mediump float;

    varying vec2 vUv;
    varying float vWave;

    uniform float uTime;

    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d.glsl);

    void main() {
      vUv = uv;

      vec3 pos = position;
      float noiseFreq = 2.0;
      float noiseAmp = 0.4;
      vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
      pos.z += snoise3(noisePos) * noiseAmp;
      vWave = pos.z;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  // Fragment Shader
  glsl`
    precision mediump float;

    uniform vec3 uColor;
    uniform float uTime;
    uniform sampler2D uTexture;

    varying vec2 vUv;
    varying float vWave;

    void main() {
      float wave = vWave * 0.2;
      vec3 texture = texture2D(uTexture, vUv + wave).rgb;
      gl_FragColor = vec4(texture, 1.0);
    }
  `
);

extend({ WaveShaderMaterial });

const Wave = (src) => {
  const ref = useRef();
  useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));

  const [image] = useLoader(THREE.TextureLoader, [
    "https://images.unsplash.com/photo-1604011092346-0b4346ed714e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80"

  ]);
  {console.log({src})}
  return (
    <mesh>
      <planeBufferGeometry args={[0.4, 0.6, 16, 16]} />
      <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
    </mesh>
  );
};

const Scene = (src) => {
  return (
    <Canvas camera={{ fov: 12, position: [0, 0, 5] }}>
      <Suspense fallback={null}>
        <Wave src={src} />
      </Suspense>
    </Canvas>
  );
};



// ...GatsbyImageSharpFluid
const AgencjaInteraktywnaRealizacje = ({ data }) => {

  const containerRef = useRef(null)
  // const image = getImage(data.project.cover)

  return (
    <>
      <SEO title="LUMINA STUDIO | Agencja Interaktywna - Realizacje"
           description="Jesteśmy Kreatywną Agencją Interaktywną,  ☎ 506 870 672 ☎  Specjalizujemy Się W Tworzeniu Stron Internetowych Oraz Brandingu"
        // schemaMarkup={schema}
      />
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >

        <main className="works-page container-fluid" data-scroll-container ref={containerRef}>
          <div className="works-page-container">

            {/*<TriggerText threshold=".5" delay="1">*/}
              <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={false}
                              secondTapeScroll={false}  fourthTapeScroll={false}
                              thirdTapeScroll={false}
                              subSectionMarqueeTitle={true}
                              title="Realizacje"
                              dataScrollPosition="bottom" dataScrollSpeed="2" />
            {/*</TriggerText>*/}

            {/*<section className="section-portfolio-container">*/}
            {/*  <div className="main-container">*/}

            {/*    <TriggerText threshold=".5" delay=".2">*/}
            {/*      <h2>Realizacje</h2>*/}
            {/*    </TriggerText>*/}

            {/*    /!*<TriggerImg delay={1}>*!/*/}
            {/*    /!*  <img*!/*/}
            {/*    /!*    data-scroll*!/*/}
            {/*    /!*    data-scroll-speed="1"*!/*/}
            {/*    /!*    data-scroll-position="top"*!/*/}
            {/*    /!*    className="orbit-blog" width="60%" src={orbitAboutPage} alt="" />*!/*/}
            {/*    /!*</TriggerImg>*!/*/}
            {/*  </div>*/}
            {/*</section>*/}


            {/*<ProjectsSubsectionNew/>*/}

            {/*<TriggerImg threshold="" delay="1">*/}

            {/*  /!*<Scene/>*!/*/}

              <div className="new-section-works-container">
                {data.allStrapiProjects.nodes.map(node => (

                  // <TriggerImg threshold="" delay="1">
                  <div style={{ backgroundImage: `url(${node.cover.url})` }}>
                    <Link to={"/agencja-interaktywna-realizacje/" + node.slug}>
                      {/*<div>*/}
                      {/*  <h2>{node.title}</h2>*/}
                      {/*  <p>{node.services}</p>*/}
                      {/*</div>*/}
                    </Link>
                  </div>
                ))}
              </div>

          </div>

          <ContactSubsec />
          <SectionMarquee firstTape={false} secondTape={false} thirdTape={false} firstTapeScroll={true}
                          secondTapeScroll={true} fourthTapeScroll={false}
                          thirdTapeScroll={true} dataScrollPosition="bottom" dataScrollSpeed="2" />
          <Foooter/>

        </main>
      </LocomotiveScrollProvider>

    </>
  )
}

export const query = graphql`
{
  allStrapiProjects {
    nodes {
      id
      title
      slug
      services
      cover{
        url
                 localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
      }
      date
      desc
    }
  }
}
`

export default AgencjaInteraktywnaRealizacje
