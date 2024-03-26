import { deck, TileInterface } from '../../_lib/deck';
import TileRankCard from './_components/TileRankCard';

export default function Tiles() {
    return(
        <>
            {
                deck.map(({name, description}: TileInterface, index) => {
                    return (
                        <TileRankCard
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