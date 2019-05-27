'use strict';

import React from 'react';
import Component1 from '../src/app';
import renderer from 'react-test-renderer';
import "../src/app";

it('renders correctly', () => {
  const component = renderer
    .create(<Component1 name="functional component" />)
    .toJSON();
  expect(component).toMatchSnapshot();
});