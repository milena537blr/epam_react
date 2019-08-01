// @flow
import React from "react";
import PropTypes from "prop-types";
import s from "./Card.module.scss";
import Box from "../Box/Box";
import { BrowserRouter as Router, Link } from "react-router-dom";

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  handleCardClick = () => {
    this.props.cardClick();
  };

  render() {
    const { poster_path, title, release_date, genres, id } = this.props.card;
    return (
      <figure className={s.card}>
        <Link to={'/film/' + id}>
          <img className={s.image} src={poster_path} alt={title} />
        </Link>
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
