import { Inter, Lusitana, Red_Hat_Display, Roboto, Ubuntu } from 'next/font/google';
 
export const inter = Inter({ subsets: ['latin'] });
export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
  });
export const roboto = Roboto({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
  });
export const ubuntu = Ubuntu({
    weight: ['400', '500'],
    subsets: ['latin'],
  });
export const redhat = Red_Hat_Display({
  weight:['300', '400'],
  subsets: ['latin'],
})