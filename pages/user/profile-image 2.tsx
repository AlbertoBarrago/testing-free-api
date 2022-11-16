import Image from 'next/image';

// @ts-ignore
export default function ImageProfile({name}) {
    return (
        <div><Image
            src="/images/pepeNero.jpg"
            height={144}
            width={144}
            alt={name}
        />
        </div>
    )
}