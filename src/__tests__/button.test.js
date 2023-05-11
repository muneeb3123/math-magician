import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/button';

describe('Button', () => {
  it('should render a button with the provided value', () => {
    const value = '5';
    const onClick = jest.fn();

    const { getByText } = render(<Button value={value} onClick={onClick} />);
    const buttonElement = getByText(value);
    expect(buttonElement).toMatchSnapshot();
  });

  it('should call the onClick function when the button is clicked', () => {
    const value = '9';
    const onClick = jest.fn();
    const { getByText } = render(<Button value={value} onClick={onClick} />);

    const buttonElement = getByText(value);
    fireEvent.click(buttonElement);

    expect(onClick).toHaveBeenCalledWith(value);
  });
});
