import React from 'react';
import PropTypes from 'prop-types';
// import s from "./TopBar.module.scss";
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import Box from '../Box/Box';

class TopBar extends React.Component {
  constructor (props) {
    super (props);
    this.handleSearchClick = this.handleSearchClick.bind (this);
  }

  handleSearchClick () {
    this.props.onHandleSearchClick ();
  }

  render () {
    return (
      <Box align="space-between" verticalAlign="middle" marginBottom={8}>
        <Logo />
        <Button
          onHandleSearchClick={this.handleSearchClick}
          text="SEARCH"
          size="large"
          color="white"
        />
      </Box>
    );
  }
}

TopBar.propTypes = {
  onHandleSearchClick: PropTypes.func,
};

export default TopBar;
