import '@/app/ui/global.css';
import { inter, roboto, ubuntu, redhat } from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${redhat.className} antialiased`}>{children}</body>
    </html>
  );
}
