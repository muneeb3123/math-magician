import operate from '../logic/operate';

describe('operate', () => {
  test('if operation is plus it add two numbers', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });
  test('if operation is minus it minus two numbers', () => {
    const result = operate(1, 2, '-');
    expect(result).toBe('-1');
  });
  test('if operation is X it multiply two numbers', () => {
    const result = operate(1, 2, 'x');
    expect(result).toBe('2');
  });
  test('if operation is divide and number by which divide is non zero it divide two numbers', () => {
    const result = operate(15, 3, '÷');
    expect(result).toBe('5');
  });
  test('if operation is divide and number by which divide is zero it shows error', () => {
    const result = operate(15, 0, '÷');
    expect(result).toBe("Can't divide by 0.");
  });
  test('if operation is % it shows mod of two', () => {
    const result = operate(10, 3, '%');
    expect(result).toBe('1');
  });
  test('should return error message when finding modulo with zero', () => {
    const result = operate(6, 0, '%');
    expect(result).toBe("Can't find modulo as can't divide by 0.");
  });

  test('should throw error for unknown operation', () => {
    expect(() => operate(2, 3, '^')).toThrow("Unknown operation '^'");
  });
});
