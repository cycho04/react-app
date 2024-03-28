import Image from 'next/image';

interface TileRankInterface{
    key: string;
    name: string;
    index: number;
    description: string,
    selected: boolean;
    handleTileClick: (index: number) => void
}

export default function TileRankCard({
    name, description, index, selected, handleTileClick
}: TileRankInterface){
    return (
        <div 
            className={`${selected ? "bg-red-500" : ""} px-3`} 
            onClick={() => handleTileClick(index)}>
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