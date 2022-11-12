import Button from "@mui/material/Button";
import Image from "next/image";
import {useState} from "react";
import PetsIcon from '@mui/icons-material/Pets';

export default function randomCat() {
    const [url, setUrl] = useState();
    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://api.thecatapi.com/v1/images/search`
            );
            const data = await res.json();
            setUrl(data[0].url);
        } catch (err) {
            console.log(err);
        }
    };

    // @ts-ignore
    function AppendCatAfterCall() {
        // @ts-ignore
        return url ?
            <div className="flex flex-col justify-center items-center">
                <Image src={url}
                       height={400}
                       width={600}
                       className='object-center'
                       alt='image'>
                </Image>
            </div>
            : null;
    }

    return <div className="text-3xl font-bold text-center mt-[2%]">
        <Button onClick={callAPI}> <PetsIcon/> <p className='ml-2 mr-2'>Get Random Cat</p> </Button>
        <AppendCatAfterCall/>
    </div>
}