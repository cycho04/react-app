import type { Metadata } from 'next'
import Header from './_components/global/Header';
import Footer from './_components/global/Footer';
 
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