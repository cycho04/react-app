import Link from 'next/link';

export default function RootLayout({ children }: {children: React.ReactNode}) {
    return (
        <>
            <Link href="/how-to-play/rankings">Tiles</Link>
            <>{children}</>
        </>
    )
}