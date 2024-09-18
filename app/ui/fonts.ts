import { Inter } from 'next/font/google';
import { Lusitana } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const lusitana = Lusitana({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-lusitana',
});

const variables = [inter.variable, lusitana.variable];

export default variables;
