import Image from "next/image";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
// @ts-ignore
import {DogResponse} from '../interfaces/DogResponse';


export default function randomCat() {
    const [dog, setDog] = useState<DogResponse>();
    const getRandomDog = async () => {
        setDog(undefined);
        try {
            const res = await fetch(
                `https://api.thedogapi.com/v1/images/search`
            );
            const data = await res.json();
            setDog(data[0]);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getRandomDog().then(null);
    }, [])

    function Loader() {
        return !dog ?
            <div className="flex flex-col justify-center items-center">
                <CircularProgress/>
            </div> :
            null;
    }

    // @ts-ignore
    function AppendCatAfterCall() {
        return dog ?
            <div className="mt-10 w-96 max-w-96 h-96 max-h-96">
                <Image src={dog.url}
                       height={600}
                       width={600}
                       onClick={getRandomDog}
                       title='Click on me for update'
                       alt={dog.id}>
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