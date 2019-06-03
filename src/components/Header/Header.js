import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.scss";

console.log(styles);

class Header extends React.Component {
  render() { 
    return (
      <div className={styles.error}>{this.props.name}</div>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string
};

export { Header };
