import React from 'react';
import handleCardClick from './Card.js';
import { shallow } from 'enzyme';
// import Card from './Card.js';
const Card = require('./Card.js').default;

describe('<Card />', () => {
  it('should be a function', () => {
    expect(typeof handleCardClick).toBe("function");
  });

  it('renders an `.card`', () => {
    const wrapper = shallow(<Card />);
    expect(wrapper.find('.card')).to.have.lengthOf(1);
  });
})
