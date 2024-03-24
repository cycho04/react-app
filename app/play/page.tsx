import {deck, TileInterface} from '../_lib/deck';
import TileRankCard from 'app/how-to-play/rankings/_components/TileRankCard';

const dealNewHand = (numOfHands: number): TileInterface[][] => {
    if (!numOfHands) return [];
    const hands: TileInterface[][] = [];
    const usedTiles: number[] = [];

    for (let i = 0; i < numOfHands; i++){
        const hand: TileInterface[] = [];
        for (let j = 0; j < 4; j++) {
            let randomNumber = Math.floor(Math.random() * 32); // Random number between 0 and 31
            while(usedTiles.includes(randomNumber)){
                randomNumber = Math.floor(Math.random() * 32); // Random number between 0 and 31
            }
            hand.push(deck[randomNumber])
            usedTiles.push(randomNumber);
        }
        hands.push(hand)
    }
    console.log('hands', hands)
    return hands;
}

export default function Page(){

    return (
        <>
            {
                dealNewHand(1).map((hand: TileInterface[]) => {
                    return (
                        hand.map(({name, description}: TileInterface, index) => {
                            return (
                                    <TileRankCard
                                    key={`${name}-${index}`}
                                    name={name}
                                    description={description}
                                    />
                                )
                        })
                    )
                })
            }
        </>
    )
}