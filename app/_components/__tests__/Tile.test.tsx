import { render, screen } from '@testing-library/react';
import Tile from '../Tile';
import { deck } from '../../_lib/deck';

describe("Testing Tile Functionality", () => {
    const {name, description} = deck[0];
    render(<Tile name={name} description={description}/>);
    const tile = screen.getByRole('img');
    const label = screen.getByRole('heading', {level: 5});

    it('renders a Tile', () => {
        expect(tile).toBeInTheDocument();
        expect(tile).toHaveAttribute('alt', `Pai Gow Tile: ${name}`)
        expect(tile).not.toHaveClass('bg-red-500');
    })

    it('has the correct label', () => {
        expect(label).toHaveTextContent(description);
    })

    it('shows the proper class with props.selected', () => {
        render(<Tile name={name} description={description} selected/>);
        const selectedTileContainer = screen.getByRole('img').closest('div');
        expect(selectedTileContainer).toHaveClass('bg-red-500');
    })
})