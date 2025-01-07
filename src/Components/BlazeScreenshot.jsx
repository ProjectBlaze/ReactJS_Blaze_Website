import "./Stylesheet/BlazeScreenshot.css"

const BlazeScreenshot = () => {
  return (
    <section className="screenshot" id="sshots">
      <p>Some Snaps Of <span className="snaps" style={{ color: "#ff2f13" }}>Blaze</span></p>
      <div className="boxDesign">
        <div className="box">
          <img src={"images/Screenshots/home.png"} alt="" />
        </div>
        <div className="box">
          <img src={"images/Screenshots/Settings.png"} alt="" />
        </div>
        <div className="box">
          <img src={"images/Screenshots/about.png"} alt="" />
        </div>
        <div className="box">
          <img src={"images/Screenshots/recent.png"} alt="" />
        </div>
      </div>
      <p className="blazeScreenshot">Get More Of Blaze Screenshots <a href="https://t.me/projectblazeupdates/98" className="sslink"><b>Here</b></a></p>
    </section>
  )
}

export default BlazeScreenshot
