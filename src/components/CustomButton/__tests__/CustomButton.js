import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from '../CustomButton';

let onClick;
let counter = 0;

beforeAll(() => {
  onClick = () => {
    counter++;
  };
});

it('should render correctly', () => {
  const wrapper = shallow(<CustomButton onClick={onClick} />);
  expect(wrapper).toMatchSnapshot();
});

it('should render CustomButton correctly with default text', () => {
  const wrapper = shallow(<CustomButton onClick={onClick} />);
  expect(wrapper.find('p').props().children).toEqual('Submit');
});

it('should render CustomButton correctly with custom text', () => {
  const text = 'My Custom Button Title';
  const wrapper = shallow(<CustomButton onClick={onClick} text={text} />);
  expect(wrapper.find('p').props().children).toEqual(text);
});

it('should correctly use passed-in click handler', () => {
  counter = 0;
  const wrapper = shallow(<CustomButton onClick={onClick} />);
  wrapper.find('button').simulate('click');
  expect(counter).toEqual(1);
});
