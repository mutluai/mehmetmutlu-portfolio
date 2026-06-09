import './globals.css';
import { Inter } from 'next/font/google';
import Preloader from '../components/Preloader';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  title: 'Mehmet Mutlu | Creative AI Specialist',
  description: 'AI-coder and designer building at the intersection of human taste and machine intelligence.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased overflow-x-hidden`}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
