import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// simple smoke tests

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the header', () => {
  const header = document.createElement('navbar');
  ReactDOM.render(<App />, header);
  ReactDOM.unmountComponentAtNode(header);
})

it('renders the sidenav', () => {
  const sideNav = document.createElement('col-auto')
  ReactDOM.render(<App />, sideNav)
  ReactDOM.unmountComponentAtNode(sideNav)
})

it('renders the output component', () => {
  const output = document.createElement('bg-dark.col')
  ReactDOM.render(<App />, output)
  ReactDOM.unmountComponentAtNode(output)
})