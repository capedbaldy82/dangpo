import '@/app/globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata = {
  title: 'Dangpo',
  description: 'Reduce your things',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`box-border`}>
        <header>
          <h1 className="hidden">DangPo</h1>
        </header>
        <main className={`m-auto max-w-2xl relative`}>
          <Header />
          <div className="px-8">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
