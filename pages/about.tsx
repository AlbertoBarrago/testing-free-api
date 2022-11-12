import Link from 'next/link';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

export default function about() {
    return <div className="text-3xl font-bold text-center mt-[20%]">
        <Link href="/"><AccessibilityIcon fontSize="large"/> Back to Home</Link>
    </div>
}