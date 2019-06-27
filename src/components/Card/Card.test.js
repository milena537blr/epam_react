import React from 'react';
import { mount } from 'enzyme';
import Card from './Card.js';
import data from '../../data/data.json';

describe('<Card />', () => {
  it('Card snapshot test', () => {
    const component = mount(<Card card={data.cards[0]} />);
    expect(component).toMatchSnapshot();
  });
})
