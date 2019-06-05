import React from "react";
import PropTypes from "prop-types";
import s from "./Card.module.scss";
import Box from "../Box/Box";

class Card extends React.Component {
  render() {
    return (
      <div className={s.card}>
        <img className={s.image} src={this.props.card.image} alt="" />
        <Box align="space-between" verticalAlign="middle">
          <div className={s.name}>{this.props.card.name}</div>
          <div className={s.date}>{this.props.card.date}</div>
        </Box>
        <div className={s.genre}>{this.props.card.genre}</div>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object,
  date: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
  image: PropTypes.string,
};

export { Card };