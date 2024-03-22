//not connected to project
import Image from 'next/image';
import { deck } from '../../_lib/deck';

export default function Tiles() {
    return(
        <>
            {
                deck.map(({name, description}: {name: string, description:string}) => {
                    return (
                        <>
                            <Image
                                src={`/${name}.jpeg`}
                                width={100}
                                height={100}
                                alt={description}
                            />
                        </>
                    )
                })
            }
        </>
    )
}