import React, { useState, useEffect } from "react"

const SectionMarquee = ({ firstTape, secondTape, thirdTape, onScroll, subSectionMarqueeTitle ,firstTapeScroll, secondTapeScroll, thirdTapeScroll, dataScrollPosition, dataScrollSpeed, fourthTapeScroll, title  }) => {
  const [playMarquee, setPlayMarquee] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true)
    }, 2000)
  }, [])

  return (
    <>
      <section className="section-marquee">
        {/*<section className="section-marquee break-out">*/}
        <div className="tapes-container">
          {
            firstTape && !firstTapeScroll
              ? (<FirstTape/>)
              : ( firstTapeScroll ? ( <FirstTapeScroll dataScrollPosition={dataScrollPosition} dataScrollSpeed={dataScrollSpeed}/> ) : null)
          }
          {
            secondTape && !secondTapeScroll
              ? (<SecondTape/>)
              : ( secondTapeScroll ? ( <SecondTapeScroll dataScrollPosition={dataScrollPosition} dataScrollSpeed={dataScrollSpeed}/> ) : null)
          }
          {
            thirdTape && !thirdTapeScroll
              ? (<ThirdTape/>)
              : ( thirdTapeScroll ? ( <ThirdTapeScroll dataScrollPosition={dataScrollPosition} dataScrollSpeed={dataScrollSpeed}/> ) : null)
          }
          {
            firstTape && !fourthTapeScroll
              ? (<FirstTape/>)
              : ( fourthTapeScroll ? ( <FourthTapeScroll dataScrollPosition={dataScrollPosition} dataScrollSpeed={dataScrollSpeed}/> ) : null)
          }
          {
            firstTape && !subSectionMarqueeTitle
              ? (<FirstTape/>)
              : ( subSectionMarqueeTitle ? ( <SubSectionMarqueeTitle dataScrollPosition={dataScrollPosition} dataScrollSpeed={dataScrollSpeed} title={title}/> ) : null)
          }
        </div>
      </section>
    </>
  )
}

const FirstTape = () => {
  return (
    <>
      <div className="first-tape-wrapper">
        <div className="first-tape animate marquee ">
          <span className="marquee__inner"> <span>Design</span> <span>Web</span> <span>Social</span> <span>Branding</span> <span>Digital</span>  <span>Strategy</span> </span>
        </div>
      </div>
    </>
  )
}

const FirstTapeScroll = ({dataScrollPosition, dataScrollSpeed}) => {
  return (
    <>
      <div className="first-tape-wrapper">
        <div className="first-tape"
             data-scroll
             data-scroll-speed={dataScrollSpeed * -1/2}
             data-scroll-position={dataScrollPosition}
             data-scroll-direction="horizontal"
             data-scroll-offset="10%, -150%"
        >
          <span className="marquee__inner"> <span>Social</span> <span>Web dev</span> <span>Design</span> <span>Branding</span> <span>Digital</span>  <span>Strategy</span> <span>Ecommerce</span>  </span>
          {/*<span className="marquee__inner"> <span>Together</span>   </span>*/}
        </div>
      </div>
    </>
  )
}

const SecondTape = () => {
  return (
    <>
      <div className="second-tape-wrapper">
        <div className="second-tape marquee animate">
          <span className="marquee__inner backwards"> <span>Work</span> <span>Work</span>  <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> <span>Work</span> </span>
        </div>
      </div>
    </>
  )
}

const SecondTapeScroll = ({dataScrollPosition, dataScrollSpeed}) => {
  return (
    <>
      <div className="second-tape-wrapper"
           // data-scroll
           // data-scroll-speed="2"
      >
        <div className="second-tape"
          data-scroll
          data-scroll-speed={dataScrollSpeed * 1/2}
          data-scroll-position={dataScrollPosition}
          data-scroll-direction="horizontal"
          data-scroll-offset="10%, -150%"
        >
          <span className="marquee__inner">  <span>Branding</span> <span>Design</span> <span>Digital</span> <span>Web dev</span> <span>Digital</span>  <span>Strategy</span> <span>Ecommerce</span> </span>
          {/*<span className="marquee__inner"> <span>Work</span> </span>*/}
        </div>
      </div>
    </>
  )
}

const ThirdTape = () => {
  return (
    <>
      <div className="third-tape-wrapper">
        <div className="third-tape">
          <span className="marquee__inner "> <span>Lumina</span>  <span>Lumina</span> <span>Lumina</span> <span>Lumina</span>  <span>Lumina</span>  <span>Lumina</span> <span>Lumina</span> </span>
        </div>
      </div>
    </>
  )
}

const ThirdTapeScroll = ({dataScrollPosition, dataScrollSpeed}) => {
  return (
    <>
      <div className="third-tape-wrapper">
        <div className="third-tape"
             data-scroll
             data-scroll-speed={dataScrollSpeed}
             data-scroll-position={dataScrollPosition}
             data-scroll-direction="horizontal"
             // data-scroll-class="test"
             data-scroll-offset="10%, -150%"
        >
          <span className="marquee__inner"> <span>Strategy</span>  <span>Web Dev</span> <span>Strategy</span> <span>Ecommerce</span>  <span>Social</span>  <span>Media</span>  <span>Design</span></span>
          {/*<span className="marquee__inner"> <span>Lumina</span> </span>*/}
        </div>
      </div>
    </>
  )
}

const FourthTapeScroll = ({dataScrollPosition, dataScrollSpeed}) => {
  return (
    <>
      <div className="fourth-tape-wrapper">
        <div className="fourth-tape"
             data-scroll
             data-scroll-speed={dataScrollSpeed}
             data-scroll-position={dataScrollPosition}
             data-scroll-direction="horizontal"
          // data-scroll-class="test"
             data-scroll-offset="10%, -350%"
        >
          <span className="marquee__inner"> <span>Lumina</span>  <span>Studio</span> <span>Studio</span> <span>Lumina</span>  <span>Studio</span>  <span>Lumina</span>  <span>Studio</span></span>

        </div>
      </div>
    </>
  )
}

const SubSectionMarqueeTitle = ({dataScrollPosition, dataScrollSpeed, title}) => {
  return (
    <>
      <div className="first-tape-wrapper">
        <div className="first-tape"
             data-scroll
             data-scroll-speed={dataScrollSpeed}
             data-scroll-position={dataScrollPosition}
             data-scroll-direction="horizontal"
             data-scroll-offset="10%, -350%"
        >
          <span className="marquee__inner"> <span>{title}</span>  <span>{title}</span> <span>{title}</span> <span>{title}</span>  <span>{title}</span>  <span>{title}</span>  <span>{title}</span></span>

        </div>
      </div>
    </>
  )
}


export default SectionMarquee
