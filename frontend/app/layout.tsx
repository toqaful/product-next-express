import './styles/globals.css';
import { Providers } from '../store/providers';
import MainLayout from '../layouts/MainLayout';

export const metadata = {
  title: 'Product App'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <MainLayout>
            {children}
          </MainLayout>
        </Providers>
      </body>
    </html>
  );
}
