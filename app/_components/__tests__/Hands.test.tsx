import { render, screen, cleanup } from '@testing-library/react';
import Hands from '../Hands';
import { NumOfHands } from '../../_lib/utils';

const setupForTiles = (num: NumOfHands) => {
    render(<Hands numOfHands={num}/>);
    const imageElements = screen.getAllByRole('img');
    const h5Elements = screen.getAllByRole('heading', { level: 5 });
    const button = screen.getAllByRole('button');
    const newHandButton = screen.getByTestId('new-hand');
    return {imageElements, h5Elements, button, newHandButton};
}

describe('Testing dealing Hands', () => {
    it('tries to deal 1 - 8 hands and checks for tiles, label, and button.', () => {
        for (let i = 1; i < 3; i++) {
            const {imageElements, h5Elements, button, newHandButton} = setupForTiles(i as NumOfHands);
            expect(imageElements).toHaveLength(i * 4);
            expect(h5Elements).toHaveLength(i * 4);
            expect(button).toHaveLength(i + 1);
            expect(newHandButton).toBeInTheDocument();
            cleanup();
        }
    })
})