import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import Image from "next/image";


export default function picOfTheDay() {
    const [nasaPicOfTheDay, setNasaPicOfTheDay] = useState<any>();
    const getUserProfile = async () => {
        try {
            const res = await fetch(
                `/api/secret-info`
            );
            const userFetched = await res.json();
            getNasaImage(userFetched).then();
        } catch (err) {
            console.log(err);
        }
    };
    const getNasaImage = async (data:any) => {
        try {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${data.nasaApiKey}`
            );
            const resp = await res.json();
            setNasaPicOfTheDay(resp);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUserProfile().then()
    }, [])

    function Loader() {
        return !nasaPicOfTheDay ?
            <div className="flex flex-col justify-center items-center">
                <CircularProgress/>
            </div> :
            null;
    }

    function ZenQuotes() {
        return nasaPicOfTheDay ?
                 <div className="mt-2 flex flex-col justify-center items-center">
                         <Image src={nasaPicOfTheDay.hdurl}
                                height={350}
                                width={350}
                                title=''
                                className='sm:h-96 sm:w-96 w-64 h-64'
                                alt={nasaPicOfTheDay.copyright}>
                         </Image>
                    <h1 className='text-1xl p-5 xs:p-0 sm:w-10/12 h-96'>{nasaPicOfTheDay.explanation}</h1>
                </div>
            : null;
    }

    return <div>
        <div className='grid grid-cols-1 gap-1 justify-items-center overflow-auto max-h-[42rem] mt-4'>
            <Loader/>
            <div>
                <ZenQuotes/>
            </div>
        </div>
    </div>
}