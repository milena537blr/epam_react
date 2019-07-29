import PropTypes from "prop-types";
import Card from "../Card/Card";
import React, { Component } from "react";

class CardsList extends Component {
  constructor(props) {
    super(props);
    // this.cards = this.props.cards;

    this.state = {
      currentCardId: "1"
    };
  }

  handleCardClick = currentCardId => {
    this.props.handleCardClick(currentCardId);
  };

  render() {
    return (
      <React.Fragment>
        {console.log(this.props.cards)}
        {this.props.cards.map(card => {
          return (
            <Card
              cardClick={() => this.handleCardClick(card)}
              card={card}
              key={card.id}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.array,
  handleCardClick: PropTypes.func
};

export default CardsList;
