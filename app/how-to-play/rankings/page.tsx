import { deck, TileInterface } from '../../_lib/deck';
import Tile from '../../_components/Tile';

export default function Tiles() {
    return(
        <>
            {
                deck.map(({name, description}: TileInterface, index) => {
                    return (
                        <Tile
                            key={`${name}-${index}`}
                            name={name}
                            description={description}
                        />
                    )
                })
            }
        </>
    )
}