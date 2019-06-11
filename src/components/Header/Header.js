import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Header.module.scss';

class Header extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return (
      <header className={s.header}>
      <div className={s.overlay} />
      <section className={s.container}>
        {this.props.children}
      </section>
    </header>
    )
  }
}

Header.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Header;