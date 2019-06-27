import React from 'react';
import { mount } from 'enzyme';
import Card from './Card.js';

let card = {
  "id": 1,
  "date": 2007,
  "description": "American drama",
  "genre": "Dramas",
  "name": "Vampire diaries",
  "text": "The Vampire Diaries is an American supernatural teen drama television series developed by Kevin Williamson and Julie Plec, based on the popular book series of the same name written by L. J. Smith.",
  "time": 145
};

describe('<Card />', () => {
  it('Card snapshot test', () => {
    const component = mount(<Card card={card} />);
    expect(component).toMatchSnapshot();
  });
})
