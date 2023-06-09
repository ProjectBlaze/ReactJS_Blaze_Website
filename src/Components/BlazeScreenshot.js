import React from 'react'
import "./Stylesheet/BlazeScreenshot.css"

const BlazeScreenshot = () => {
  return (
    <section className="screenshot" id="sshots">
  <p>Some Snaps Of <span className="snaps" style={{color: "#3379d4"}}>Blaze</span></p>
    <div className="boxDesign">
      <div className="box">
        <img src={"images/Screenshots/home.jpg"} alt=""/>
      </div>
      <div className="box">
        <img src={"images/Screenshots/Settings.jpg"} alt=""/>
      </div>
      <div className="box">
        <img src={"images/Screenshots/about.jpg"} alt=""/>
      </div>
      <div className="box">
        <img src={"images/Screenshots/recent.jpg"} alt=""/>
      </div>
    </div>
    <p className="blazeScreenshot">Get More Of Blaze Screenshots <a href="https://t.me/projectblazeupdates/98" className="sslink"><b>Here</b></a></p>
</section>
  )
}

export default BlazeScreenshot
