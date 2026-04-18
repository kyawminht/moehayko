// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ',
  description: '2012 လောက်တုန်းက ရေးထားတဲ့ စာရေးမူကို web app အဖြစ် ပြောင်းထားတာဖြစ်ပါတယ်။',
  authors: [{ name: 'Chit Thae' }],
  keywords: 'ချစ်သဲ, မိုးဟေကို, မြန်မာဝတ္ထု, Burmese novel, အချစ်ဝတ္ထု',
  
  // Open Graph / Facebook / LinkedIn / Telegram
  openGraph: {
    title: 'မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ',
    description: '2012 လောက်တုန်းက ရေးထားတဲ့ စာရေးမူကို web app အဖြစ် ပြောင်းထားတာဖြစ်ပါတယ်။',
    url: 'https://chit-thae.vercel.app',
    siteName: 'ချစ်သဲ',
    images: [
      {
        url: 'https://chit-thae.vercel.app/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'ချစ်သဲ - Chit Thae Book Cover',
      },
    ],
    locale: 'my_MM',
    type: 'book',
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ',
    description: '2012 လောက်တုန်းက ရေးထားတဲ့ စာရေးမူကို web app အဖြစ် ပြောင်းထားတာဖြစ်ပါတယ်။',
    images: ['https://chit-thae.vercel.app/cover.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="my">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Myanmar:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Kalam:wght@300;400;700&display=swap"
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}