import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from "./Logo.module.scss";

class Logo extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <a className={s.logo} href="#">
        netflixroulette
      </a>
    )
  }
}
Logo.propTypes = {
}

export { Logo };