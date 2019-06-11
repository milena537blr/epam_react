import React, { Component } from "react";
// import PropTypes from "prop-types";
import s from "./Footer.module.scss";
import Logo from '../Logo/Logo';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <footer className={s.footer}>
        <div className={s.container}>
          <Logo />
        </div>
      </footer>
    );
  }
}
Footer.propTypes = {};

export default Footer;
