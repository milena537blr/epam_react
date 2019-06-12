import React from "react";
// import PropTypes from "prop-types";
import "./TopBar.module.scss";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Box from '../Box/Box';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box align="space-between" verticalAlign="middle" marginBottom={8}>
        <Logo />
        <Button text="SEARCH" size="large" color="white" />
      </Box>
    );
  }
}
TopBar.propTypes = {};

export default TopBar;
