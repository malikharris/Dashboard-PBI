import React from 'react';
import { shallow } from 'enzyme';
import FormField from '../FormField';

it('should render correctly', () => {
  const onChange = () => {}; // mocked required function
  const wrapper = shallow(
    <FormField
      onChange={onChange}
      header="Header"
      value="A sample value"
      placeholder="placeholder"
    />,
  );
  expect(wrapper).toMatchSnapshot();
});

it('should render with the correct default type of "text"', () => {
  const onChange = () => {}; // mocked required function
  const wrapper = shallow(
    <FormField
      onChange={onChange}
      header="Header"
      value="A sample value"
      placeholder="placeholder"
    />,
  );
  expect(wrapper.find('input').props().type).toEqual('text');
});

it('should render with correct type of "password"', () => {
  const onChange = () => {}; // mocked required function
  const wrapper = shallow(
    <FormField
      onChange={onChange}
      header="Header"
      value="A sample value"
      placeholder="placeholder"
      type="password"
    />,
  );
  expect(wrapper.find('input').props().type).toEqual('password');
});
