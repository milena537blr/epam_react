import React, {Component} from 'react';
import PropTypes from 'prop-types';
import s from './Article.module.scss';
import Box from '../Box/Box';
import imageCard from '../../images/card.jpg';

class Article extends Component {
  render () {
    const { name, description, date, time, text } = this.props.card;
    return (
      <Box className={s.article}>
        <figure>
          <img className={s.image} src={imageCard} alt={name} />
        </figure>
        <article data-testid="article">
          <h1 className={s.name}>
            {name}
          </h1>
          <div className={s.description}>{description}</div>
          <div className={s.info}>
            <span className={s.date}>{date}</span>
            <span className={s.time}>{time} min</span>
          </div>
          <div className={s.text}>{text}</div>
        </article>
      </Box>
    );
  }
}

Article.propTypes = {
  card: PropTypes.object,
};

export default Article;
