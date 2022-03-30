import React from "react"
import arrow from "../assets/icons/arrow-in-circle.svg"

const StickyServices = () => {
  return <>
    <section className="completely-new-services">
      <div className="completely-new-services__left" id="fixed-elements">
        <div data-scroll data-scroll-sticky data-scroll-target="#fixed-elements">
          {/*<span className="subsec-title mb-5">Usługi</span>*/}
          <h2 className="mt-5">What is a company
            that does good?</h2>

          <p className="mt-5">
            The idea of making a positive impact with every project is what drives us. That's why we specialise
            in working with brands promoting environmental and socially responsible products, practices, and
            values.
          </p>
        </div>
      </div>
      <div className="completely-new-services__right">
        <div className="service">
          <div>
            <h2>Web dev</h2>
            <p className="mt-5">Synth roof party williamsburg, actually austin bushwick knausgaard. Seitan
              neutra quinoa yr small batch artisan, four loko vinyl irony XOXO</p>
          </div>
          <img src={arrow} alt="" width="80px" className="align-self-end service__img" />
        </div>
        <div className="service">
          <div>
            <h2>Web dev</h2>
            <p className="mt-5">Synth roof party williamsburg, actually austin bushwick knausgaard. Seitan
              neutra quinoa yr small batch artisan, four loko vinyl irony XOXO</p>
          </div>
          <img src={arrow} alt="" width="80px" className="align-self-end service__img" />
        </div>
        <div className="service">
          <div>
            <h2>Web dev</h2>
            <p className="mt-5">Synth roof party williamsburg, actually austin bushwick knausgaard. Seitan
              neutra quinoa yr small batch artisan, four loko vinyl irony XOXO</p>
          </div>
          <img src={arrow} alt="" width="80px" className="align-self-end service__img" />
        </div>
        <div className="service">
          <div>
            <h2>Web dev</h2>
            <p className="mt-5">Synth roof party williamsburg, actually austin bushwick knausgaard. Seitan
              neutra quinoa yr small batch artisan, four loko vinyl irony XOXO</p>
          </div>
          <img src={arrow} alt="" width="80px" className="align-self-end service__img" />
        </div>
        <div className="service">
          <div>
            <h2>Web dev</h2>
            <p className="mt-5">Synth roof party williamsburg, actually austin bushwick knausgaard. Seitan
              neutra quinoa yr small batch artisan, four loko vinyl irony XOXO</p>
          </div>
          <img src={arrow} alt="" width="80px" className="align-self-end service__img" />
        </div>
        <div className="service">
          <div>
            <h2>Web dev</h2>
            <p className="mt-5">Synth roof party williamsburg, actually austin bushwick knausgaard. Seitan
              neutra quinoa yr small batch artisan, four loko vinyl irony XOXO</p>
          </div>
          <img src={arrow} alt="" width="80px" className="align-self-end service__img" />
        </div>
      </div>
    </section>
  </>
}

export default StickyServices
