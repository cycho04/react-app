import type { Metadata } from 'next'
import Header from './_components/Header';
import Footer from './_components/Footer';
 
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
              <Header />
              <main>{children}</main>
              <Footer />
            </body>
        </html>
    )
}