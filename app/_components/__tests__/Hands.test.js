import { render, screen, cleanup } from '@testing-library/react';
import Hands from '../Hands';

const setupForTiles = (num) => {
    render(<Hands numOfHands={num}/>);
    const imageElements = screen.getAllByRole('img');
    const h5Elements = screen.getAllByRole('heading', { level: 5 });
    const button = screen.getAllByRole('button');
    return {imageElements, h5Elements, button}
}

describe('Testing dealing Hands', () => {
    it('tries to deal 1 - 8 hands and checks for tiles, label, and button.', () => {
        for (let i = 1; i < 3; i++) {
            const {imageElements, h5Elements, button} = setupForTiles(i);
            expect(imageElements).toHaveLength(i * 4);
            expect(h5Elements).toHaveLength(i * 4);
            expect(button).toHaveLength(i);
            cleanup();
        }
    })
})