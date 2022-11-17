import Image from 'next/legacy/image'
import {useState} from "react";
import {CircularProgress} from "@mui/material";
import {CatElement, CatResponse} from '../interfaces/CatElement';


export default function randomCat({data}: {data: CatResponse}) {
    // @ts-ignore
    const [cat, setCat] = useState<CatElement>(data[0]);
    const getRandomCat = async () => {
        // @ts-ignore
        setCat([])
        try {
            const res = await fetch(
                `https://api.thecatapi.com/v1/images/search`
            );
            const data = await res.json();
            setCat(data[0]);
        } catch (err) {
            console.log(err);
        }
    };


    function AppendCatAfterCall() {
        return <div className="mt-10 w-96 max-w-96 h-96 max-h-96">
            <Image src={cat.url}
                   height={600}
                   width={600}
                   onClick={getRandomCat}
                   title='Click on me for update'
                   alt={cat.id}>
            </Image>
        </div>
    }

    return <div>
        <div className='grid grid-cols-1 gap-1 place-items-center'>
            <div>
                <AppendCatAfterCall/>
            </div>
        </div>
    </div>
}

export async function getServerSideProps() {
    const res = await fetch(`${process.env.BASE_URL}/api/cat`)
    const data = await res.json()
    return {
        props: {data},
    }
}