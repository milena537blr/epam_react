import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Main.module.scss";
import Box from "../Box/Box";
import Card from "../Card/Card";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: ""
    };
  }

  render() {
    const cards = this.props.cards.map(card => {
      return (
        <Card
          cardClick={this.props.onHandleCardClick}
          card={card}
          key={card.id}
        />
      );
    });

    return (
      <main className={s.main}>
        <div className={s.container}>
          <Box className={s.wrapper} align="center">
            {cards}
          </Box>
        </div>
      </main>
    );
  }
}

Main.propTypes = {
  cards: PropTypes.array,
  searchText: PropTypes.string,
  onHandleCardClick: PropTypes.func
};

export default Main;
