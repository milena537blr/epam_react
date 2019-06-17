import React from "react";
import PropTypes from "prop-types";
// import s from "./TopBar.module.scss";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Box from '../Box/Box';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearchClick = this.handleSearchClick.bind(this);
  }

  handleSearchClick() {
    this.props.onHandleSearchClick();
  }

  render() {
    return (
      <Box align="space-between" verticalAlign="middle" marginBottom={8}>
        <Logo />
        <div onClick={this.handleSearchClick}>
          <Button text="SEARCH" size="large" color="white" />
        </div>
      </Box>
    );
  }
}
TopBar.propTypes = {
  onHandleSearchClick: PropTypes.func
};

export default TopBar;
