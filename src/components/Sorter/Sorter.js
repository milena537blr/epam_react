import React from 'react';
// import PropTypes from "prop-types";
// import s from "./Sorter.module.scss";

class Sorter extends React.Component {
  render () {
    return (
      <div>
        <span>Sort by </span>
        <span>release date </span>
        <span>rating</span>
      </div>
    );
  }
}

/* Sorter.propTypes = {
  card: PropTypes.object,
}; */

export default Sorter;
