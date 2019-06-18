import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Article.module.scss";
import Box from "../Box/Box";
import imageCard from "../../images/card.jpg";

class Article extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Box className={s.article}>
        <figure>
          <img className={s.image} src={imageCard} alt={this.props.card.name} />
        </figure>
        <article>
          <h1 className={s.name}>
            {this.props.card.name}
          </h1>
          <div className={s.description}>{this.props.card.description}</div>
          <div className={s.info}>
            <span className={s.date}>{this.props.card.date}</span>
            <span className={s.time}>{this.props.card.time} min</span>
          </div>
          <div className={s.text}>{this.props.card.text}</div>
        </article>
      </Box>
    );
  }
}

Article.propTypes = {
  card: PropTypes.object,
  date: PropTypes.string,
  name: PropTypes.string,
  genre: PropTypes.string,
  image: PropTypes.string
};

export default Article;
