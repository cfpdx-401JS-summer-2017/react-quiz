import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Counter from '../src/components/Counter';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders a snapshot when the value is > 0', () => {
  const tree = renderer.create(<Counter currentVal={2} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a snapshot when the value === 0', () => {
  const tree = renderer.create(<Counter currentVal={0} />).toJSON();
  expect(tree).toMatchSnapshot();
});