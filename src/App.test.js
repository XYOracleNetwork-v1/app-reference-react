import './setupTests'
import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Layout from './components/Layout';

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders a layout", () => {
  const wrapper = shallow(<App />);
  const layout = <Layout></Layout>;
  expect(wrapper.contains(layout)).toEqual(true);
});