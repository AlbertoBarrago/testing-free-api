import {NextApiRequest, NextApiResponse} from "next";



export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    let data;
    const getRandomCat = async () => {

        try {
            const res = await fetch(
                `https://api.thecatapi.com/v1/images/search`
            );
            return data = await res.json();
        } catch (err) {
            console.log(err);
        }
    };
    res.status(200).json(data)
}