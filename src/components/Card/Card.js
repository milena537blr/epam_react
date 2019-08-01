// @flow
import React from "react";
import PropTypes from "prop-types";
import s from "./Card.module.scss";
import Box from "../Box/Box";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCardClick = () => {
    this.props.cardClick();
  };

  render() {
    const { poster_path, title, release_date, genres } = this.props.card;
    return (
      <figure className={s.card}>
        <button
          onClick={this.handleCardClick}
          onKeyDown={this.props.cardClick}
          area-label={this.props.card.name}
        >
          <img className={s.image} src={poster_path} alt={title} />
        </button>
        <figcaption>
          <Box align="space-between" verticalAlign="middle">
            <div className={s.name}>{title}</div>
            <div className={s.date}>{release_date}</div>
          </Box>
          {genres.map((genre, index) => (
            <span key={genre.toString()} className={s.genre}>
              {genre}
              {index === genres.length - 1 ? "" : ", "}
            </span>
          ))}
        </figcaption>
      </figure>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object,
  cardClick: PropTypes.func
};

export default Card;
