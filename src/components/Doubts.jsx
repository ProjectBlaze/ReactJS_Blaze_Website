import "./stylesheet/Doubts.css"

const Doubts = () => {
  return (
    <section className="changelog">
    <p>Clear Your <span className="answer">Doubts!</span></p>
    <div className="containerchangelog my-4">
      <div className="textside">
        <h1>Are Custom ROMs <span className="safe" style={{color: "rgb(77, 224, 9)"}}>Safe?</span></h1>
        Well, unlocking your bootloader might sound suspicious, but, using a custom ROM easily outnumbers the advantages it has over stock OEM software. They don't contain bloatware and are more regularly updated than actual smartphone vendors. Worried about security issues? No problem. Custom ROM devs update their ROM sources atleast twice a month which ensures that it has the latest security patches from Google. Also, the whole source code is posted on public forums like GitHub where anyone can have a look at. A pro tip - do not follow advice of so called "YouTubers" who just declare custom ROMs are dangerous without any research.
      </div>
      <div className="imageside">
        <img src={"images/safe.png"} alt=""/>
      </div>
    </div>
    <div className="containerchangelogleft">
      <div className="textside">
        <h1>Prerequisites for installing <span className="safe" style={{color: "rgb(0, 164, 185)"}}>custom ROMs</span></h1>
        All Android devices follow a similar way of operating. So, the first thing required is to unlock the bootloader. Several smartphone vendors have their own way of unlocking the bootloader. Some may require an external unlock tool, some may require just a couple of adb commands. It'll be too lengthy to write a detailed guide to cover the process for all vendors, but if you get stuck at something, and want to know what to do next, there is always YouTube to the rescue. <b>A thing to lookout for : unlocking the bootloader will WIPE ALL YOUR DATA ON THE PHONE! Be sure to have a backup of your important files. </b>
      </div>
      <div className="imageside">
        <img src={"images/prerequisite.png"} alt=""/>
      </div>
    </div>

    &nbsp;&nbsp;
    &nbsp;&nbsp;
    &nbsp;&nbsp;

    <div className="containerchangelog">
      <div className="textside">
        <h1>Busting some <span className="safe" style={{color: "rgb(48, 71, 105)"}}>common myths</span></h1>
        The most important thing beginners feel to install custom ROMs is they immediately without any research finalize that root is mandatory. But no, <b>this isn't true.</b> Root is optional. You can install custom ROMs <b>WITHOUT ROOT.</b> Another thing people easily believe is that custom ROMs increase the performance of a device. This entirely is not true, but instead the developers optimize the device tree for fewer use of hardware resources and removing components that are not required. This indirectly gives more freedom for the phone to perform better.
      </div>
      <div className="imageside">
        <img src={"images/root.png"} alt=""/>
      </div>
    </div>

    &nbsp;&nbsp;
    &nbsp;&nbsp;
    &nbsp;&nbsp;

    <div className="containerchangelogleft">
      <div className="textside">
        <h1>Stock OEM <span className="safe" style={{color: "#ff2f13"}}>vs ProjectBlaze</span></h1>
        Stock OEMs generally contain lots of bloatware and thereby use more hardware resources than intended. They contain unnecessary processes which continuously run in the background which cause battery drain and random stutters. Sometimes, these processes might also be malicious ones which collect user data and send them to anonymous third party servers. ProjectBlaze gets rid of all unintended processes and instead provides a clean user experience with lots customizations out of the box. It also contains the required GApps with handy components like SetupWizard so that you can re-install your apps, encrypt your phone and register biometric data without any hassle.
      </div>
      <div className="imageside">
        <img src={"images/changelogs.png"} alt=""/>
      </div>
    </div>
    <div className="containerchangelog my-4">
      <div className="textside">
        <h1>Finally, why<span className="safe" style={{color: "#ff2f13"}}> ProjectBlaze?</span></h1>
        Blaze is unique from other android 12 ROMs - Remember how Google changed the whole way the QuickSettings panel looked? <b>Well, if you liked those smaller, round Quick Settings tiles from previous android versions which look much cleaner while also retaining the goodness of the MaterialYou theming system - then ProjectBlaze is for you. </b> ProjectBlaze is also a customization feature rich ROM where you can tweak the UI according to your needs. It also has some interesting extras like the all new GameSpace, colored statusbar icons, UDFPS customizations, clear all notifications button, and a ton more!!
      </div>
      <div className="imageside">
        <img src={"images/sc.png"} alt=""/>
      </div>
    </div>
</section>
  )
}

export default Doubts
