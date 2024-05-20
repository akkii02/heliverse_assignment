import classes from "./Fourthpage.module.css";
import img1 from "../../assets/motionarteffect-img9.png";
import img2 from "../../assets/motionarteffect-img6.png";
import img3 from "../../assets/motionarteffect-img7.png";

const Fourthpage = () => {
  return (
    <div className={classes.container}>
    <div className={classes.main}>
      <div className={classes.Heading}>
        <h1>An All-Round Plugin With Powerful Features</h1>
        <p>
          Whether you're a seasoned web designer or just starting out, Motion
          Art for Elementor seamlessly integrates with the Elementor platform,
          providing you with a seamless and intuitive experience.
        </p>
      </div>
    </div>
    <div className={classes.box}>
      <div className={classes.firstBox}>
        <img src={img1} alt="Image 1" className={classes.image} />
        <div className={classes.secondBox}>
          <h1>Light Weight</h1>
          <p>Motion Art for Elementor is designed to be lightweight.</p>
        </div>
      </div>
      <div className={classes.firstBox}>
      <img src={img2} alt="Image 2" className={classes.image} />
        <div className={classes.secondBox}>
          <h1>100% Responsive</h1>
          <p>Create a consistent visual experience across all devices.</p>
        </div>
      </div>
      <div className={classes.firstBox}>
      <img src={img3} alt="Image 3" className={classes.image} />
        <div className={classes.secondBox}>
          <h1>User Friendly Interface</h1>
          <p>Ensure a smooth experience for both applicants and administrators.</p>
        </div>

      </div>
    </div>
    </div>
  );
};

export default Fourthpage;
