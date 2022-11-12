import Image from "next/image";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
// @ts-ignore
import {CatResponse} from '../interfaces/CatResponse';


export default function randomCat() {
    const [cat, setCat] = useState<CatResponse>();
    const getRandomCat = async () => {
        setCat(undefined);
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

    useEffect(() => {
        getRandomCat().then(null);
    }, [])

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