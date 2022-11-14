// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'

type Data = {
    id: string,
    name: string,
    surname: string,
    nasaApiKey: string
}

function generateRandomId() {
    return (Math.floor(Math.random() * 100) + 'hsFeG£$34sDF' + Date.now()).toString();
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json(
        {
            id: generateRandomId(),
            name: 'Alberto',
            surname: 'Barrago',
            nasaApiKey: 'gefavWIrU7iD8o6zLgvojChcvE5UHrPtgxhUd7aF' //private
        }
    )
}
