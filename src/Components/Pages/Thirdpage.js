import classes from "./Thirdpage.module.css";
import img1 from "../../assets/motionarteffect-img10.png";
import img2 from "../../assets/motionarteffect-img11.png";
import img3 from "../../assets/motionarteffect-img8.png";
const Thirdpage = () => {
  return (
    <>
      <div className={classes.main}>
        <h1 className={classes.heading}>
          Apply On Any Section Or Enable For Whole Page
        </h1>
        <div className={classes.container}>
          <div className={classes.box}>
            <h2 className={classes.boxHead}>Apply On Section</h2>
            <p className={classes.boxPtag}>
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.{" "}
            </p>
            <img src={img1} />
          </div>
          <div className={`${classes.box} ${classes.box2}`}>
            <h2 className={classes.boxHead}>Apply On Page</h2>
            <p className={classes.boxPtag}>
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.
            </p>
            <img src={img2} />
          </div>
        </div>
      </div>
      <div className={classes.banner}>
        <h2 className={classes.bannerHead}>
          Supported by All Popular Browsers
        </h2>
        <p className={classes.bannerPtag}>
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
        <div className={classes.bannerimg}>
            <img src={img3} />
        </div>
      </div>
    </>
  );
};

export default Thirdpage;
