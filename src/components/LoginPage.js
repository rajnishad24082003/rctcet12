import React, { useState } from "react";
import classes from "../assets/css/LoginPage.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [readMore, setReadMore] = useState(false);

  const readMoreOnClick = () => {
    setReadMore((readMore) => !readMore);
  };
  return (
    <div className={classes.login_outermost_container}>
      <div className={classes.close_button}>
        <Link to="/">
          {" "}
          <AiOutlineClose />{" "}
        </Link>
      </div>
      <div className={classes.login_container}>
        <h1 className={classes.signup_head}>Sign Up</h1>
        <div className={classes.body_container}>
          <div className={classes.already_login_container}>
            <span className={classes.already_mem_text}>Already a member?</span>
            <div className={classes.login_color_text}>Log In</div>
          </div>
          <div className={classes.signup_google_container}>
            <div className={classes.google_icon}>
              <FcGoogle />
            </div>
            <span className={classes.signup_google}>Sign up with Google</span>
          </div>
          <div className={classes.or_linebreak}>
            <span className={classes.or_span}>or</span>
          </div>
          <div className={classes.signup_email}></div>
        </div>
        <div className={classes.checkbox_readMore_container}>
          <div className={classes.before_readmore_container}>
            <label className={classes.signup_checkbox_label}>
              <input type="checkbox" />
              Sign up to this site with a public profile.
            </label>
            <div
              onClick={readMoreOnClick}
              className={classes.signup_readMore_button}
            >
              {readMore === true ? "Read Less" : "Read More"}{" "}
            </div>
          </div>
          {readMore && (
            <div style={{ marginTop: ".5rem" }}>
              Your profile will be set to public automatically when you sign up.
              You can change this later in your profile settings.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
