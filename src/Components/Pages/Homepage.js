import classes from "./Homepage.module.css";

const Homepage = () => {
  return (
    <div className={classes.main}>
      <div className={classes.rightside}>
        <p className={classes.txt}>Transform Your Website</p>
        <p>With Motion Art Effect</p>
      </div>
      <div className={classes.leftside}>
        <h1>
          Attract Your Visitors <br /> Attention With Colorful <br />
          <span>
            <h2 className={classes.headtxt}>Motion Art Effect</h2>
          </span>
        </h1>
        <p className={classes.ptxt}>
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
};
export default Homepage;
