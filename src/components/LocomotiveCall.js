import { useEffect } from "react"

import LocomotiveScroll from "locomotive-scroll"


const ScrollUpdate = ({ func, callbacks }) => {
  useEffect(() => {
    let locomotiveScroll
    locomotiveScroll = new LocomotiveScroll()
    locomotiveScroll.update()

    // Exposing to the global scope for ease of use.
    window.scroll = locomotiveScroll
    locomotiveScroll.on("call", (func, obj) =>  {
      console.log("call", func);
    })
  })

  return null
}

export default ScrollUpdate
