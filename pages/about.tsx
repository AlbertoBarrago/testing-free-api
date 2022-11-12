import Link from 'next/link';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Button from "@mui/material/Button";

export default function about() {
    const callAPI = async () => {
        try {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/posts/1`
            );
            const data = await res.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };

    return <div className="text-3xl font-bold text-center mt-[20%]">

        <Button onClick={callAPI}>Make Api Call</Button>
        <Link href="/"><AccessibilityIcon fontSize="large"/> Back to Home</Link>

    </div>
}