import { Inter, Dongle } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
});

export const dongle = Dongle({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--dongle',
});
