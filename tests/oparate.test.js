import operate from '../logic/operate';

test('sum', () => {
  const result = operate(1, 2, '+');
  expect(result).toBe('3');
});

test('substract', () => {
  const result = operate(6, 3, '-');
  expect(result).toBe('3');
});

test('multiply', () => {
  const result = operate(6, 3, 'x');
  expect(result).toBe('18');
});

test('sivision', () => {
  const result = operate(6, 3, '÷');
  expect(result).toBe('2');
});

test('sivision', () => {
  const result = operate(6, 0, '÷');
  expect(result).toBe('Can\'t divide by 0.');
});

test('modal', () => {
  const result = operate(6, 2, '%');
  expect(result).toEqual('0');
});

test('modal', () => {
  const result = operate(6, 0, '%');
  expect(result).toEqual('Can\'t find modulo as can\'t divide by 0.');
});
