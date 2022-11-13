import Image from "next/image";
import {useEffect, useState} from "react";
import {CircularProgress} from "@mui/material";
// @ts-ignore
import {UserResponse} from '../interfaces/UserResponse';


export default function User() {
    const [user, setUser] = useState<UserResponse>();
    const getUserProfile = async () => {
        try {
            const res = await fetch(
                `/api/secret-info`
            );
            const data = await res.json();
            setUser(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUserProfile().then(null);
    }, [])


    return <div>
        <div className='grid grid-cols-1 gap-1'>
            <h1>Welcome {user?.name}</h1>
        </div>
    </div>
}