import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Panel.module.scss";
import Box from '../Box/Box';
import Sorter from '../Sorter/Sorter';

class Panel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className={s.panel}>
        <Box
          align="space-between"
          verticalAlign="middle"
          className={s.container}
        >
          <div>7 movies found</div>
          <Sorter />
        </Box>
      </section>
    );
  }
}
Panel.propTypes = {};

export default Panel;
