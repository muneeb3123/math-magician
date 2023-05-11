import calculate from '../logic/calculate';

describe('calculate', () => {
  test('it reset all calculator when button name is AC', () => {
    const result = calculate({ total: '6', next: '7', operation: '+' }, 'AC');
    expect(result).toEqual({ total: null, next: null, operation: null });
  });

  test('if button name is 0 and object.next is 0 then do nothing', () => {
    const result = calculate({ next: '0' }, '0');
    expect(result).toEqual({});
  });

  test('if button is number add it to next', () => {
    const result = calculate({ next: null, total: null, operation: null }, '5');
    expect(result).toEqual({ next: '5', total: null });
  });

  test('if button is operation add it to next', () => {
    const result = calculate({ next: null, total: null, operation: null }, '+');
    expect(result).toEqual({ operation: '+' });
  });

  test('If there is an operation, and next is not zero', () => {
    const result = calculate({ next: '1', total: null, operation: '+' }, '2');
    expect(result).toEqual({ operation: '+', next: '12', total: null });
  });

  test('If there is no operation, and next is not zero', () => {
    const result = calculate({ next: '1', total: null }, '2');
    expect(result).toEqual({ next: '12', total: null });
  });

  test('should add a decimal point to the current number when buttonName is "."', () => {
    const result = calculate({ total: '6', next: '3', operation: null }, '.');
    expect(result).toEqual({ total: '6', next: '3.', operation: null });
  });

  test('should not add a decimal point if the current number already has one', () => {
    const result = calculate({ total: '6', next: '3.5', operation: null }, '.');
    expect(result).toEqual({ total: '6', next: '3.5', operation: null });
  });

  test('should toggle the sign of the current number when buttonName is "+/-"', () => {
    const result = calculate({ total: '6', next: '3', operation: null }, '+/-');
    expect(result).toEqual({ total: '6', next: '-3', operation: null });
  });

  test('should perform the operation and store the result when buttonName is "="', () => {
    const result = calculate({ total: '6', next: '3', operation: '+' }, '=');
    expect(result).toEqual({ total: '9', next: null, operation: null });
  });

  test('should store the operation when buttonName represents a new operation', () => {
    const result = calculate({ total: '6', next: '3', operation: null }, '+');
    expect(result).toEqual({ total: '3', next: null, operation: '+' });
  });

  test('should perform the current operation and update the operation when buttonName is a new operation', () => {
    const result = calculate({ total: '6', next: '3', operation: '+' }, '*');
    expect(result).toEqual({ total: '9', next: null, operation: '*' });
  });
});