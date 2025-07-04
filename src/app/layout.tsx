import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Greater Dinajpur Freelancer Association',
    description: 'Connecting Dinajpur’s Digital Talent',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
            {children}
        </body>
        </html>
    );
}