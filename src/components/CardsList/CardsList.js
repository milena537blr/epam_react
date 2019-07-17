import PropTypes from "prop-types";
import Card from "../Card/Card";
import React, { Component } from "react";

class CardsList extends Component {
  constructor(props) {
    super(props);
    this.cards = this.props.cards;

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
        {Object.keys(this.cards).map(id => {
          return (
            <Card
              cardClick={() => this.handleCardClick(id)}
              card={this.cards[id]}
              key={id}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

CardsList.propTypes = {
  cards: PropTypes.object,
  handleCardClick: PropTypes.func
};

export default CardsList;
