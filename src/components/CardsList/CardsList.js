import PropTypes from "prop-types";
import { Card } from "../Card/Card";
import React, { Component } from "react";

class CardsList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.cards.map(card => {
          return (
            <Card
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
};

export { CardsList };
