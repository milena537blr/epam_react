import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Main.module.scss";
import Box from "../Box/Box";
import Card from '../Card/Card';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const searchText = this.props.searchText;

    const cards = [];
    this.props.cards.forEach((card, index) => {
      cards.push(
        <Card
          card={card}
          key={index}
        />
      );
    });

    return (
      <main className={s.main}>
        <div className={s.container}>
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
