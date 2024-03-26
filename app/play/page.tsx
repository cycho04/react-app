'use client';

import {TileInterface} from '../_lib/deck';
import { dealNewHand } from '../_lib/utils';
import TileRankCard from 'app/how-to-play/rankings/_components/TileRankCard';

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