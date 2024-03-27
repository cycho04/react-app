import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../page';

describe('Testing Play Screen', () => {
    it('shows 4 cards', () => {
        render(<Page />);
        const imageElements = screen.getAllByRole('img');
        const h5Elements = screen.getAllByRole('heading', { level: 5 });
        expect(imageElements).toHaveLength(4);
        expect(h5Elements).toHaveLength(4);
    })

    it('shows 2 tiles selected and 2 not selected', async () => {
        const user = userEvent.setup();
        render(<Page />);
        const imageElements = screen.getAllByRole('img')
        const firstTile = imageElements[0].closest('div');
        const secondTile = imageElements[1].closest('div');
        const thirdTile = imageElements[2].closest('div');
        const fourthTile = imageElements[3].closest('div');
        user.click(firstTile)
        user.click(secondTile)
        await waitFor(() => {
            expect(firstTile).toHaveClass('bg-red-500');
            expect(secondTile).toHaveClass('bg-red-500');
            expect(thirdTile).not.toHaveClass('bg-red-500');
            expect(fourthTile).not.toHaveClass('bg-red-500');
        })
    })
})