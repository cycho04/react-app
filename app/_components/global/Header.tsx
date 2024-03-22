import Link from 'next/link';

export default function Header() {
    return (
        <>
            <Link href="/">Home</Link>
            <Link href="/how-to-play">Tutorial</Link>
        </>
    )
}