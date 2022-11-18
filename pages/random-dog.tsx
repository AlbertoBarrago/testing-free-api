import Image from "next/image";
import {useState} from "react";
import {DogResponse} from '../interfaces/DogResponse';


export default function randomCat({data}: any) {
    const [dog, setDog] = useState<DogResponse>(data[0]);
    const getRandomDog = async () => {
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

    function AppendCatAfterCall() {
        return <div className="mt-10 w-96 sm:w-[100%] max-w-96 h-96 max-h-96">
            <Image src={dog.url}
                   height={600}
                   width={600}
                   onClick={getRandomDog}
                   title='Click on me for update'
                   alt={dog.id}>
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
    const res = await fetch(`${process.env.BASE_URL}/api/dog`)
    const data = await res.json()
    return {
        props: {data},
    }
}