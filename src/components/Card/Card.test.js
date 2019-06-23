import React from 'react';
import handleCardClick from './Card.js';
import { shallow } from 'enzyme';
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
  it('should be a function', () => {
    expect(typeof handleCardClick).toBe("function");
  });

  it('renders an `.card`', () => {
    const wrapper = shallow(<Card card={card}/>);
    expect(wrapper.find('.card')).toExist();
  });
})
