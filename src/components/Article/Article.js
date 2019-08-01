import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Article.module.scss';
import Box from '../Box/Box';
import imageCard from '../../images/card.jpg';

class Article extends Component {
  render () {
    const { title, poster_path, overview, runtime, tagline, release_date } = this.props.card;
    return (
      <Box className={s.article}>
        <figure>
          <img className={s.image} src={poster_path} alt={title} />
        </figure>
        <article data-testid="article">
          <h1 className={s.name}>
            {title}
          </h1>
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
  card: PropTypes.object,
};

export default Article;
