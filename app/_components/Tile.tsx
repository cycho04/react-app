"use client"
import Image from 'next/image';

interface TileRankInterface{
    key?: string;
    name: string;
    description: string,
    index?: number;
    selected?: boolean;
    handleTileClick?: (index: number) => void;
}

export default function Tile({
    name, description, index, selected, handleTileClick
}: TileRankInterface){

    const onClick = () => {
        if (handleTileClick && index !== undefined) handleTileClick(index);
    }

    return (
        <div
            className={`${selected ? "bg-red-500" : ""} px-3`} 
            onClick={onClick}>
            <Image
                src={`/${name}.jpeg`}
                width={100}
                height={100}
                alt={`Pai Gow Tile: ${name}`}
                priority
            />
            <h5 className="text-1xl font-bold underline">{description}</h5>
        </div>
    )
}