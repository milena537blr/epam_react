import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Main.module.scss";
import Box from '../Box/Box';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main className={s.main}>
        <div className={s.container}>
          <Box className={s.wrapper} align="center">
            {this.props.children}
          </Box>
        </div>
      </main>
    );
  }
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
