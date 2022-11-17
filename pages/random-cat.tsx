import Image from "next/image";
import {useState} from "react";
import {CircularProgress} from "@mui/material";
import {CatResponse} from '../interfaces/CatResponse';


export default function randomCat({data}: any) {
    const [cat, setCat] = useState<CatResponse>(data[0]);
    const getRandomCat = async () => {
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

    function Loader() {
        return !cat ?
            <div className="flex flex-col justify-center items-center">
                <CircularProgress/>
            </div> :
            null;
    }

    // @ts-ignore
    function AppendCatAfterCall() {
        return cat ?
            <div className="mt-10 w-96 max-w-96 h-96 max-h-96">
                <Image src={cat.url}
                       height={600}
                       width={600}
                       onClick={getRandomCat}
                       title='Click on me for update'
                       alt={cat.id}>
                </Image>
            </div>
            : null;
    }

    return <div>
        <div className='grid grid-cols-1 gap-1 place-items-center'>
            <Loader/>
            <div>
                <AppendCatAfterCall/>
            </div>
        </div>
    </div>
}

export async function getServerSideProps() {
    const res = await fetch(`https://api.thecatapi.com/v1/images/search`)
    const data = await res.json()
    return {
        props: {data}, // will be passed to the page component as props
    }
}