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
  description: 'ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။',
  authors: [{ name: 'Chit Thae' }],
  keywords: [
    'ချစ်သဲ', 'Chit Thae', 'မိုးဟေကို', 'မိုးဟေကိုသို့တမ်းချင်း',
    'မြန်မာဝတ္ထု', 'Burmese novel', 'အချစ်ဝတ္ထု', 'မြန်မာစာပေ',
    'Burmese literature', 'လူငယ်ဝတ္ထု',
    'အချစ်', 'အချစ်ဇာတ်လမ်း', 'ချစ်ခြင်းမေတ္တာ', 'အလွမ်းဝတ္ထု',
    'အလွမ်းဇာတ်လမ်း', 'ခွဲခွာခြင်း', 'လွမ်းဆွတ်ခြင်း', 'တမ်းတခြင်း',
    'အဆက်ဖြတ်စာ', 'နှလုံးသားအချစ်',
    'ရာမဇာတ်တော်', 'ဒသဂီရိ', 'မယ်သီတာ', 'ကျောင်းကပွဲ',
    'ကျောင်းသားဘဝ', 'ပထမအချစ်', 'First love Myanmar', 'မှော်ဘီ',
    'Myanmar ebook', 'မြန်မာအီးဘွတ်', 'ဝတ္ထု', 'Web novel Myanmar',
    'အွန်လိုင်းဝတ္ထု', 'ဖုန်းဖတ်စာ', 'Mobile reading',
    'မြန်မာစာဖတ်ပရိသတ်', 'Myanmar readers', 'စာဖတ်သူ', 'စာအုပ်စာပေ',
    'မြန်မာစာအုပ်', 'Myanmar book',
    'မြန်မာရသစာပေ', 'Myanmar fiction', 'ဝတ္ထုတို', 'ဝတ္ထုရှည်',
    'မြန်မာစာရေးဆရာ', 'Myanmar author',
    'ကြေကွဲဖွယ်', 'ရင်ခုန်ဖွယ်', 'ချစ်စရာ', 'ဖတ်ကောင်းသောဝတ္ထု',
    'စိတ်ဝင်စားဖွယ်ဝတ္ထု', 'Emotional story', 'Heart touching',
    'ချစ်သဲဝတ္ထု', 'မိုးဟေကိုဝတ္ထု', 'ချစ်သဲစာအုပ်',
    'Chit Thae book', 'Chit Thae novel', 'Moe Hay Ko', 'Moe Hay Ko novel',
    'မြန်မာအချစ်ဝတ္ထုများ', 'လက်ရှိဖတ်ကောင်းသောဝတ္ထု',
    'မြန်မာဝတ္ထုအသစ်',
    'Burmese love story', 'Myanmar romantic novel',
  ],
  
  // Open Graph / Facebook / LinkedIn / Telegram
  openGraph: {
    title: 'မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ',
    description: 'ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။',
    url: 'https://moehayko-love.vercel.app/',
    siteName: 'ချစ်သဲ',
    images: [
      {
        url: 'https://moehayko-love.vercel.app/cover.jpg',
        width: 1200,
        height: 630,
        alt: 'ချစ်သဲ - Chit Thae Book Cover',
      },
    ],
    locale: 'my_MM',
    type: 'book',
    // Additional Facebook-specific fields
    determiner: 'the',
    emails: ['contact@chitthae.com'], // Update with your email
    // For book type
    book: {
      isbn: '',
      releaseDate: '2024',
      tags: ['Burmese Novel', 'Love Story', 'Romance'],
    },
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ',
    description: 'ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။',
    images: ['https://moehayko-love.vercel.app/cover.jpg'],
    site: '@chitthae', // Add your Twitter handle
    creator: '@chitthae', // Add author's Twitter handle
  },

  // Additional meta tags for better SEO
  alternates: {
    canonical: 'https://moehayko-love.vercel.app/',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  verification: {
    google: 'PoQxpdNOpZFCjqo2D6lSX0LfJg1tT7bRwSi6wRBNy1g',
    // Add other verifications if needed
    // yandex: '',
    // me: '',
  },

  // Apple specific
  appleWebApp: {
    capable: true,
    title: 'ချစ်သဲ',
    statusBarStyle: 'black-translucent',
  },

  // Facebook specific (additional via metadata)
  facebook: {
    appId: '', // Add your Facebook App ID if you have one
  },

  // LinkedIn specific (uses openGraph)
  linkedin: {
    owner: '', // Add your LinkedIn company/page ID
  },

  // Additional
  category: 'books.literature',
  classification: 'Burmese Novel, Romance',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const baseUrl = 'https://moehayko-love.vercel.app';
  
  return (
    <html lang="my">
      <head>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#ffffff" />
        
        {/* Viewport already in metadata, but adding for extra safety */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        
        {/* Google verification */}
        <meta name="google-site-verification" content="PoQxpdNOpZFCjqo2D6lSX0LfJg1tT7bRwSi6wRBNy1g" />
        
        {/* Bing verification (optional) */}
        {/* <meta name="msvalidate.01" content="YOUR_BING_VERIFICATION" /> */}
        
        {/* Pinterest verification (optional) */}
        {/* <meta name="p:domain_verify" content="YOUR_PINTEREST_VERIFICATION" /> */}

        {/* Facebook Open Graph additional tags */}
        <meta property="fb:app_id" content="" /> {/* Add your Facebook App ID */}
        <meta property="og:type" content="book" />
        <meta property="og:title" content="မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ" />
        <meta property="og:description" content="ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:site_name" content="ချစ်သဲ" />
        <meta property="og:image" content={`${baseUrl}/cover.jpg`} />
        <meta property="og:image:secure_url" content={`${baseUrl}/cover.jpg`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="ချစ်သဲ - Chit Thae Book Cover" />
        <meta property="og:locale" content="my_MM" />
        <meta property="og:locale:alternate" content="en_US" />
        
        {/* Book specific Open Graph tags */}
        <meta property="book:author" content="Chit Thae" />
        <meta property="book:release_date" content="2024" />
        <meta property="book:tag" content="Burmese Novel" />
        <meta property="book:tag" content="Love Story" />
        <meta property="book:tag" content="Romance" />
        
        {/* Article specific (if applicable) */}
        <meta property="article:author" content="Chit Thae" />
        <meta property="article:published_time" content="2024-01-01T00:00:00.000Z" />
        <meta property="article:modified_time" content="2024-01-01T00:00:00.000Z" />
        
        {/* Twitter Card additional tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@chitthae" />
        <meta name="twitter:creator" content="@chitthae" />
        <meta name="twitter:title" content="မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ" />
        <meta name="twitter:description" content="ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။" />
        <meta name="twitter:image" content={`${baseUrl}/cover.jpg`} />
        <meta name="twitter:image:alt" content="ချစ်သဲ - Chit Thae Book Cover" />
        
        {/* LinkedIn specific (uses Open Graph, but adding extra) */}
        <meta property="linkedin:owner" content="" /> {/* Add your LinkedIn company ID */}
        
        {/* WhatsApp/Telegram (uses Open Graph) - these are covered by OG tags */}
        
        {/* Additional SEO meta tags */}
        <meta name="author" content="Chit Thae" />
        <meta name="copyright" content="Chit Thae" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Burmese" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={baseUrl} />
        
        {/* Alternate language versions */}
        <link rel="alternate" hrefLang="my" href={baseUrl} />
        <link rel="alternate" hrefLang="en" href={`${baseUrl}/en`} />
        <link rel="alternate" hrefLang="x-default" href={baseUrl} />
        
        {/* Dublin Core metadata for better SEO */}
        <meta name="DC.title" content="မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ" />
        <meta name="DC.creator" content="Chit Thae" />
        <meta name="DC.subject" content="Burmese Novel, Love Story" />
        <meta name="DC.description" content="ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။" />
        <meta name="DC.language" content="my" />
        <meta name="DC.type" content="Text" />
        
        {/* Schema.org markup for better SEO (using JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Book",
              "name": "မိုးဟေကိုသို့ တမ်းချင်း",
              "author": {
                "@type": "Person",
                "name": "Chit Thae"
              },
              "description": "ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။",
              "url": baseUrl,
              "image": `${baseUrl}/cover.jpg`,
              "inLanguage": "my",
              "datePublished": "2024",
              "genre": ["Romance", "Drama", "Fiction"],
              "keywords": "Burmese novel, love story, Chit Thae",
              "audience": {
                "@type": "Audience",
                "name": "Young adults and adults interested in Burmese literature"
              }
            })
          }}
        />
        
        {/* Google Analytics - Just for visitor tracking */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HD9JECR5Z6"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HD9JECR5Z6');
            `,
          }}
        />

        {/* Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+Myanmar:wght@400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;500;600;700&family=Kalam:wght@300;400;700&display=swap"
        />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        
        {/* RSS Feed (if you have one) */}
        {/* <link rel="alternate" type="application/rss+xml" title="ချစ်သဲ RSS" href="/feed.xml" /> */}
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