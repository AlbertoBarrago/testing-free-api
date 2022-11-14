import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
import Image from "next/image";


export default function randomMeowfacts() {
    const [meowFact, setMeowFact] = useState<any>();
    const getMeowFacts = async () => {
        setMeowFact(undefined);
        try {
            const res = await fetch(
                `https://meowfacts.herokuapp.com/`
            );
            const resp = await res.json();
            setMeowFact(resp.data);
            console.log(resp);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getMeowFacts().then(null);
    }, [])

    function Loader() {
        return !meowFact ?
            <div className="flex flex-col justify-center items-center">
                <CircularProgress/>
            </div> :
            null;
    }

    // @ts-ignore
    function AppendCatAfterCall() {
        return meowFact ?
            <div className="mt-2 text-center">
              <h1 className='text-3xl hover:cursor-pointer p-10' onClick={getMeowFacts}>{meowFact}</h1>
            </div>
            : null;
    }

    return <div>
        <div className='grid grid-cols-1 gap-1'>
            <Loader/>
            <div>
                <AppendCatAfterCall/>
            </div>
        </div>
    </div>
}