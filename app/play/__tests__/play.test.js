import { render, screen } from '@testing-library/react';
import Page from '../page';

describe('Testing Play Screen', () => {
    it('shows 4 cards', () => {
        render(<Page />);
        const imageElements = screen.getAllByRole('img');
        const h5Elements = screen.getAllByRole('heading', { level: 5 });
        expect(imageElements).toHaveLength(4);
        expect(h5Elements).toHaveLength(4);
    })
})