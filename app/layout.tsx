import '@/app/ui/global.css';
import fontVariables from '@/app/ui/fonts';
import clsx from 'clsx';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx(...fontVariables, 'font-sans antialiased')}>
        {children}
      </body>
    </html>
  );
}
