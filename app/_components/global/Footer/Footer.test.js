import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Footer from './Footer';

test('It shows footer and date', () => {
    // render the component
    render(<Footer/>);
    // Manipulate the component or find the element in it
    const footer = screen.getByTestId('footer');
    // Make assertion - Make sure it is doing what we expect
    expect(footer).toHaveTextContent('CYC 2024');
})
