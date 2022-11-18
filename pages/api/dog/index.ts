import {NextApiRequest, NextApiResponse} from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const resp = await fetch(`https://api.thedogapi.com/v1/images/search`)
    const data = await resp.json()
    res.status(200).json(data)
}