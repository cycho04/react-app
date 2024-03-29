import { useState, useEffect } from 'react'
import { TileInterface } from '../_lib/deck';
import { HandValues } from '../_lib/utils';
import Tile from './Tile';

export const ACTIVE_BTN = 'hover:bg-blue-700';
export const INACTIVE_BTN = 'opacity-50 cursor-not-allowed';

interface HandProps {
    hand: TileInterface[];
}

export default function Hand({ hand }: HandProps) {

    const [selectedTilesIndex, setSelectedTilesIndex] = useState<number[]>([]);
    const [handValue, setHandValue] = useState<HandValues>({
        high: null,
        low: null,
    });

    useEffect(() => {
        if (selectedTilesIndex.length === 2){
            const selectedHand: TileInterface[] = [];
            const notSelectedHand : TileInterface[] = [];
            hand.forEach((tile, index) => {
                if (selectedTilesIndex.includes(index)) selectedHand.push(tile);
                else notSelectedHand.push(tile)
            })
            console.log(selectedHand, notSelectedHand)
        }
    }, [selectedTilesIndex])

    const onSetHandsClick = (): void => {
        selectedTilesIndex.forEach((tileIndex: number): void => {
            console.log(tileIndex);
        });
    }

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
            {/* <p>{handValue}</p> */}
            <button 
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${selectedTilesIndex.length === 2 ? ACTIVE_BTN : INACTIVE_BTN}`} 
                disabled={selectedTilesIndex.length !== 2} 
                onClick={onSetHandsClick}>
                    Set Hand
            </button>
            {
                hand.map(({name, description}: TileInterface, index: number) => {
                    return (
                        <Tile
                            key={`${name}-${index}`}
                            name={name}
                            index={index}
                            description={description}
                            selected={selectedTilesIndex.includes(index)}
                            handleTileClick={handleTileClick}
                        />
                    )
                })
            }
        </>
    )
}