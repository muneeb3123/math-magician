import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

test('renders navbar component', () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>,
  );

  const getNavItemByText = (text) => screen.getByText(text);

  const navbarName = getNavItemByText('Math Fans');
  expect(navbarName).toBeInTheDocument();

  const homeLink = getNavItemByText('Home');
  expect(homeLink).toBeInTheDocument();

  const calculatorLink = getNavItemByText('Calculator');
  expect(calculatorLink).toBeInTheDocument();

  const quoteLink = getNavItemByText('Quote');
  expect(quoteLink).toBeInTheDocument();
});
