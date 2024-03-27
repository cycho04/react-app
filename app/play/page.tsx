'use client';

import { useEffect, useState } from 'react';

import {TileInterface} from '../_lib/deck';
import { dealNewHand } from '../_lib/utils';
import TileRankCard from '../how-to-play/rankings/_components/TileRankCard';

export default function Page(){

    const [numOfHands, setNumOfHands] = useState(1)
    const [hands, setHands] = useState<TileInterface[][]>([])
    const [selectedTilesIndex, setSelectedTilesIndex] = useState<number[]>([]);

    useEffect(() => {
        setHands(dealNewHand(numOfHands));
    }, [])

    const handleTileClick = (index: number): void => {
        if (selectedTilesIndex.includes(index)) {
            const remainingTile = selectedTilesIndex.filter((tileIndex: number) => tileIndex !== index);
            setSelectedTilesIndex(remainingTile);
        }
        else if (selectedTilesIndex.length === 2) return;
        else setSelectedTilesIndex((i: number[]) => [...i, index]);
    }
    
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
                                        index={index}
                                        description={description}
                                        selected={selectedTilesIndex.includes(index)}
                                        handleTileClick={handleTileClick}
                                    />
                                )
                        })
                    )
                })
            }
        </>
    )
}