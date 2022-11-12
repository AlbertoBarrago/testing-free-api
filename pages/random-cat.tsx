import Button from "@mui/material/Button";
import Image from "next/image";
import {useEffect, useState} from "react";
import PetsIcon from '@mui/icons-material/Pets';
import {CircularProgress} from "@mui/material";

export default function randomCat() {
    const [cat, setCat] = useState();
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
        {/*<Button onClick={callAPI}> <PetsIcon/> <p className='ml-2 mr-2'>Get Random Cat</p></Button><br/>*/}
        <Loader/>
        <AppendCatAfterCall/>
    </div>
}