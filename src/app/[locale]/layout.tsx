import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import '@/app/globals.css';

const locales = ['en', 'id'];

export const metadata = {
  title: 'Scalejade | Global Infrastructure & Systemic Reliability',
  description: 'Deploying high-assurance AI, Blockchain, and Infrastructure solutions for financial regulators and industry leaders worldwide.',
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>; // Typed as a Promise for Next.js 15
}) {
  const { locale } = await params;

  if (!locales.includes(locale)) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale} className="antialiased scroll-smooth">
      <body className="flex flex-col min-h-screen bg-canvas text-slate-900 font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          
          <Navigation locale={locale} />
          
          <main className="flex-grow flex flex-col">
            {children}
          </main>
          
          <Footer />
          
        </NextIntlClientProvider>
      </body>
    </html>
  );
}