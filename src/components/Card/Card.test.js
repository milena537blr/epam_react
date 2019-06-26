import React from 'react';
import handleCardClick from './Card.js';
import { shallow } from 'enzyme';
import Card from './Card.js';
import renderer from "react-test-renderer";

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
  it('handleCardClick should be a function', () => {
    expect(typeof handleCardClick).toBe("function");
  });

  it('renders an `.card`', () => {
    const wrapper = shallow(<Card card={card}/>);
    expect(wrapper.find('.card')).toExist();
  });

  it('The card have a property', () => {
    expect(card).toHaveProperty('name');
  });

  it('Card snapshot test', () => {
    const component = renderer.create(<Card card={card} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('handleCardClick method should be invoked', () => {
    const onHandleCardClick = jest.fn();
    const wrapper = shallow(<Card card={card} cardClick={onHandleCardClick}/>);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'handleCardClick');
    wrapper.find('button').simulate('click');
    expect(instance.handleCardClick).toHaveBeenCalled(); 
  });
})
