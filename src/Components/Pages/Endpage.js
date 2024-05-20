import classes from "./Endpage.module.css";

const EndPage = () => {
return (
      <div  className={classes.main}>
            <div className={classes.leftContent}>
              <span>&copy; 2023 Copywrite. All rights reserved by QodeMatrix</span>
            </div>
            <div className={classes.rightContent}>
                  <li>Documentation</li>
                  <li>Support</li>
            </div>
      </div>
);
}
export default EndPage;