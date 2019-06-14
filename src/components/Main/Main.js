import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Main.module.scss";
import Box from "../Box/Box";
import Card from '../Card/Card';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(e) {
    console.log("dsfdsf");
    this.props.onHandleCardClick(e.target.value);
  }

  render() {
    // const searchText = this.props.searchText;

    const cards = [];
    this.props.cards.forEach((card, index) => {
      cards.push(
        <Card
          onClick={this.handleCardClick}
          card={card}
          key={index}
        />
      );
    });

    return (
      <main className={s.main}>
        <div className={s.container} onClick={this.handleCardClick}>
          <Box className={s.wrapper} align="center" >
           {cards}
          </Box>
        </div>
      </main>
    );
  }
}
Main.propTypes = {
  cards: PropTypes.array,
  searchText: PropTypes.string
};

export default Main;
