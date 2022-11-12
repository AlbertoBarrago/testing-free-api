import Image from "next/image";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";

interface CatResponse {
    "id": string,
    "url": string,
    "width": number,
    "height": number
}

export default function randomCat() {
    const [cat, setCat] = useState<CatResponse>();
    const callAPI = async () => {
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
        callAPI().then(null);
    }, [])

    function Loader() {
        return !cat ? <CircularProgress/> : null;
    }

    // @ts-ignore
    function AppendCatAfterCall() {
        return cat ?
            <div className="flex flex-col justify-center items-center">
                <Image src={cat.url}
                       height={600}
                       width={600}
                       onClick={callAPI}
                       className='object-contain'
                       title='Click on me for update'
                       alt={cat.id}>
                </Image>
            </div>
            : null;
    }

    return <div>
        <Loader/>
        <AppendCatAfterCall/>
    </div>
}