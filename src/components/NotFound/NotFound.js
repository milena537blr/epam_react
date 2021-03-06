import React from "react";
import s from "./NotFound.module.scss";
import PropTypes from "prop-types";

class NotFound extends React.Component {
  render() {
    return <div className={s.noData}>{this.props.text}</div>;
  }
}

NotFound.propTypes = {
  text: PropTypes.string
};

export { NotFound };
