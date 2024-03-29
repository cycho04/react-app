import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { deck } from '../../_lib/deck';
import Hand, { ACTIVE_BTN, INACTIVE_BTN } from '../Hand';

const hand = deck.slice(0, 4);
const setupForTiles = () => {
    render(<Hand hand={hand}/>);
    const imageElements = screen.getAllByRole('img');
    const firstTile = imageElements[0].closest('div')!;
    const secondTile = imageElements[1].closest('div')!;
    const thirdTile = imageElements[2].closest('div')!;
    const fourthTile = imageElements[3].closest('div')!;
    const h5Elements = screen.getAllByRole('heading', { level: 5 });
    const button = screen.getByRole('button');
    return {imageElements, firstTile, secondTile, thirdTile, fourthTile, h5Elements, button}
}

describe('Testing Play Screen', () => {
    const user = userEvent.setup();

    it('shows 4 unselected tiles and inactive button', () => {
        const {imageElements, h5Elements, button} = setupForTiles();
        expect(imageElements).toHaveLength(4);
        expect(h5Elements).toHaveLength(4);
        expect(button).toHaveClass(INACTIVE_BTN)
    })

    it('clicks 1 tile. Show 1 selected and inactive button', async () => {
        const {firstTile, secondTile, thirdTile, fourthTile, button} = setupForTiles()
        expect(firstTile).toBeInTheDocument();
        user.click(firstTile)
        await waitFor(() => {
            expect(firstTile).toHaveClass('bg-red-500');
            expect(secondTile).not.toHaveClass('bg-red-500');
            expect(thirdTile).not.toHaveClass('bg-red-500');
            expect(fourthTile).not.toHaveClass('bg-red-500');
            expect(button).toHaveClass(INACTIVE_BTN)
        })
    })

    it('clicks 2 tiles. Show 2 selected and active button', async () => {
        const {firstTile, secondTile, thirdTile, fourthTile, button} = setupForTiles()
        user.click(firstTile)
        user.click(secondTile)
        await waitFor(() => {
            expect(firstTile).toHaveClass('bg-red-500');
            expect(secondTile).toHaveClass('bg-red-500');
            expect(thirdTile).not.toHaveClass('bg-red-500');
            expect(fourthTile).not.toHaveClass('bg-red-500');
            expect(button).toHaveClass(ACTIVE_BTN)
        })
    })

    it('clicks 2 tile and unclicks same 2. Show 0 selected and inactive button', async () => {
        const {firstTile, secondTile, thirdTile, fourthTile, button} = setupForTiles()
        user.click(firstTile)
        user.click(firstTile)
        user.click(thirdTile)
        user.click(thirdTile)
        await waitFor(() => {
            expect(firstTile).not.toHaveClass('bg-red-500');
            expect(secondTile).not.toHaveClass('bg-red-500');
            expect(thirdTile).not.toHaveClass('bg-red-500');
            expect(fourthTile).not.toHaveClass('bg-red-500');
            expect(button).toHaveClass(INACTIVE_BTN)
        })
    })

    it('clicks all 4 tiles in order. Show only first 2 selected and active button', async () => {
        const {firstTile, secondTile, thirdTile, fourthTile, button} = setupForTiles()
        user.click(firstTile)
        user.click(secondTile)
        user.click(thirdTile)
        user.click(fourthTile)
        await waitFor(() => {
            expect(firstTile).toHaveClass('bg-red-500');
            expect(secondTile).toHaveClass('bg-red-500');
            expect(thirdTile).not.toHaveClass('bg-red-500');
            expect(fourthTile).not.toHaveClass('bg-red-500');
            expect(button).toHaveClass(ACTIVE_BTN)
        })
    })
})