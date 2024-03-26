'use client';

import { useEffect, useState } from 'react';

import {TileInterface} from '../_lib/deck';
import { dealNewHand } from '../_lib/utils';
import TileRankCard from 'app/how-to-play/rankings/_components/TileRankCard';

export default function Page(){

    const [numOfHands, setNumOfHands] = useState(1)
    const [hands, setHands] = useState<TileInterface[][]>([])

    useEffect(() => {
        setHands(dealNewHand(numOfHands));
    }, [])
    
    return (
        <>
            {
                hands.map((hand: TileInterface[]) => {
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