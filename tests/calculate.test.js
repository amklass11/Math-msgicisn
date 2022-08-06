import calculate from './mocks/calculate';

it('AC button is clicked', () => {
  const object = {
    total: 2,
    next: 2,
    operation: '+',
  };
  const buttonName = 'AC';
  const result = calculate(object, buttonName);
  expect(result).toStrictEqual({ total: null, next: null, operation: null });
});

it('= button is clicked', () => {
  const object = {
    total: 2,
    next: 2,
    operation: '+',
  };
  const buttonName = '=';
  const result = calculate(object, buttonName);
  expect(result).toStrictEqual({ total: '4', next: null, operation: null });
});

it('+/- button is clicked', () => {
  const object = {
    total: 2,
    next: null,
    operation: null,
  };
  const buttonName = '+/-';
  const result = calculate(object, buttonName);
  expect(result).toStrictEqual({ total: '-2', next: null, operation: null });
});

it('. button is clicked', () => {
  const object = {
    total: null,
    next: '3',
    operation: null,
  };
  const buttonName = '.';
  const result = calculate(object, buttonName);
  expect(result).toStrictEqual({ total: null, next: '3.', operation: null });
});

it('0 button is clicked', () => {
  const object = {
    total: null,
    next: '0',
    operation: null,
  };
  const buttonName = '5';
  const result = calculate(object, buttonName);
  expect(result).toStrictEqual({ total: null, next: '5' });
});
