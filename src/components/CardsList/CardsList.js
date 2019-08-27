import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import React, { Component } from "react";

class CardsList extends Component {
  constructor(props) {
    super(props);
  }

  handleCardClick = currentCardId => {
    this.props.handleCardClick(currentCardId);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.cards.map(card => {
          return (
            <Card
              cardClick={() => this.handleCardClick(card.id)}
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

export { CardsList };
