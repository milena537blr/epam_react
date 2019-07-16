import React from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.scss';
import classNames from 'classnames';

class Button extends React.Component {
  render () {
    let buttonClassNames = classNames (
      s.button,
      this.props.size ? s[this.props.size] : null,
      this.props.color ? s[this.props.color] : null
    );
    return (
      <button
        type="submit"
        className={buttonClassNames}
        onClick={this.props.onHandleSearchClick}
        onKeyDown={this.handleSearchClick}
        data-testid={this.props.dataTestId}
        area-label={this.props.areaLabel}
      >
        {this.props.text}
      </button>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  dataTestId: PropTypes.string,
  areaLabel: PropTypes.string,
  onHandleSearchClick: PropTypes.func,
};

export default Button;
