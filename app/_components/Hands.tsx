'use client';
import { useEffect, useState } from 'react';

import { TileInterface, NumOfHands } from '../_lib/deck';
import { createHands } from '../_lib/utils';
import Hand from './Hand';

export default function Hands({numOfHands}: {numOfHands: NumOfHands}){

    const [hands, setHands] = useState<TileInterface[][]>([])

    useEffect(() => {
        setHands(createHands(numOfHands));
    }, [])

    return (
        <>
            <div className="flex">
                {
                    hands.map((hand: TileInterface[], index: number) => {
                        return (
                            <Hand key={`tile-${index}`} hands={hands} hand={hand}/>
                        )
                    })
                }
            </div>
        </>
    )
}