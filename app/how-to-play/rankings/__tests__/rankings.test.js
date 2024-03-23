import { render, screen } from '@testing-library/react';
import Page from '../page';

describe('Testing Rankings Screen', () => {
    it('shows 32 cards', () => {
        render(<Page />);
        const imageElements = screen.getAllByRole('img');
        const h5Elements = screen.getAllByRole('heading', { level: 5 });
        expect(imageElements).toHaveLength(32);
        expect(h5Elements).toHaveLength(32);
    })
})