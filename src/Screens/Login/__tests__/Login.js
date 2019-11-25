import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Login';

it('should render Login correctly', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

it('should reject invalid email input', () => {});

it('should accept valid email input', () => {});
