import classes from "./Secondpage.module.css";
import rating from "../../assets/motionarteffect-img4.png";
import img1 from "../../assets/motionarteffect-img1.png";
import img2 from "../../assets/motionarteffect-img2.png";
import img3 from "../../assets/motionarteffect-img3.png";
import img4 from "../../assets/motionarteffect-img5.png";
const Secondpage = () => {
return (
      <>
<div className={classes.main}>
      <h5 className={classes.title}>
      Trusted by thousands of users around the world
      </h5>
      <div className={classes.ratingblock}>
            <div className={classes.box}>
                  <div className={classes.firstblock}>
                        <img src={img1}/>
                  </div>
                  <div className={classes.secondblock}>
                        <img src={rating} />
                        <span>
                              4.5Score, Review
                        </span>
                  </div>
            </div>
            <div className={classes.box}>
                  <div className={classes.firstblock}>
                        <img src={img2}/>
                  </div>
                  <div className={classes.secondblock}>
                        <img src={rating} />
                        <span>
                              4.5Score, Review
                        </span>
                  </div>
            </div>
            <div className={classes.box}>
                  <div className={classes.firstblock}>
                        <img src={img3}/>
                  </div>
                  <div className={classes.secondblock}>
                        <img src={rating} />
                        <span>
                              4.5Score, Review
                        </span>
                  </div>
            </div>
      </div>
</div>
<div className={classes.container}>
      <div className={classes.firstcontainer}>
            <h1>Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
            <p>Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className={classes.btn}>Purchase From Envato</button>

      </div>
      <div className={classes.secondcontainer}>
            <img src={img4} />
      </div>
</div>
</>
);
}
export default Secondpage;