import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Article.module.scss";
import { Box } from "../Box/Box";
import { connect } from "react-redux";

class Article extends Component {
  render() {
    const {
      title,
      poster_path,
      overview,
      runtime,
      tagline,
      release_date
    } = this.props.currentMovie;
    return (
      <Box className={s.article}>
        <figure>
          <img className={s.image} src={poster_path} alt={title} />
        </figure>
        <article data-testid="article">
          <h1 className={s.name}>{title}</h1>
          <div className={s.description}>{tagline}</div>
          <div className={s.info}>
            <span className={s.date}>{release_date}</span>
            <span className={s.time}>{runtime} min</span>
          </div>
          <div className={s.text}>{overview}</div>
        </article>
      </Box>
    );
  }
}

Article.propTypes = {
  currentMovie: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let currentMovie = {
    poster_path: "",
    title: "",
    release_date: "",
    genres: []
  };
  const currentCardId = ownProps.match.params.id;
  if (state.data.movies.length > 0) {
    currentMovie = Object.assign(
      {},
      state.data.movies.find(movie => movie.id == currentCardId)
    );
  }
  return {
    currentMovie
  };
}

export default connect(mapStateToProps)(Article);
