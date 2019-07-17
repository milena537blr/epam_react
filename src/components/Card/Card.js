// @flow
import React from "react";
import PropTypes from "prop-types";
import s from "./Card.module.scss";
import Box from "../Box/Box";
import imageCard from "../../images/card.jpg";

class Card extends React.Component {
  constructor(props: any) {
    super(props);
  }

  handleCardClick = () => {
    this.props.cardClick();
  };

  render() {
    return (
      <figure className={s.card}>
        <button
          onClick={this.handleCardClick}
          onKeyDown={this.props.cardClick}
          area-label={this.props.card.name}
        >
          <img className={s.image} src={imageCard} alt={this.props.card.name} />
        </button>
        <figcaption>
          <Box align="space-between" verticalAlign="middle">
            <div className={s.name}>{this.props.card.name}</div>
            <div className={s.date}>{this.props.card.date}</div>
          </Box>
          <div className={s.genre}>{this.props.card.genre}</div>
        </figcaption>
      </figure>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object,
  date: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
  image: PropTypes.string,
  cardClick: PropTypes.func
};

export default Card;
