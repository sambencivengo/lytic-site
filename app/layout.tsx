import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Nav } from '~/app/components/layout/nav';
import { Footer } from '~/app/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex justify-center items-center">
          <Nav />
        </div>
        {/* // NOTE: possibly remove min-h-screen */}
        <div className="min-h-screen overflow-x-hidden">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
