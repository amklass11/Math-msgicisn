import renderer from 'react-test-renderer';
import App from './App';
import Calculator from './components/calculator';

test('renders learn react link', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders learn react link', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
