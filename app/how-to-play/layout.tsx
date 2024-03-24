import Link from 'next/link';

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <Link href="/how-to-play/rankings">Rankings</Link>
            <Link href="/how-to-play/strategies-and-tools">Strategies and Tools</Link>
            <>{children}</>
        </>
    )
}