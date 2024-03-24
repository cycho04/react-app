import Image from 'next/image';

interface TileRankInterface{
    key: string;
    name: string;
    description: string
}

export default function TileRankCard({name, description}: TileRankInterface){
    return (
        <>
            <Image
                src={`/${name}.jpeg`}
                width={100}
                height={100}
                alt={`Pai Gow Tile: ${name}`}
            />
            <h5 className="text-3xl font-bold underline">{description}</h5>
        </>   
    )
}