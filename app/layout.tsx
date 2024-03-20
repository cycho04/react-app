import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'PG Tiles',
  description: 'Learn how to play Pai Gow Tiles',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en">
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
  }