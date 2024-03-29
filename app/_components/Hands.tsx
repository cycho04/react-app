'use client';
import { useEffect, useState } from 'react';

import { TileInterface, NumOfHands } from '../_lib/deck';
import { createHands } from '../_lib/utils';
import Hand from './Hand';

interface HandsProps {
    numOfHands: NumOfHands
}

export default function Hands({numOfHands}: HandsProps) {

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
                            <Hand key={`tile-${index}`} hand={hand}/>
                        )
                    })
                }
            </div>
            <button 
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded`} 
                onClick={() => setHands(createHands(numOfHands))}>
                    New Hand
            </button>
        </>
    )
}