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
  description: 'မင်းက အမေ့နဖူး မှာ နားနေတဲ့ယင်ကို ကျည်ပွေ့နဲ့ရိုက်သတ်တဲ့သမီးလို မမိုက်ချင်ခမ်းပါနဲ့ လို့ ပြောခဲ့တာ ကို မမေ့ပါဘူး ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။',
  authors: [{ name: 'Chit Thae' }],
 keywords: [
  // Core
  'ချစ်သဲ', 'Chit Thae', 'မိုးဟေကို', 'မိုးဟေကိုသို့တမ်းချင်း',
  
  // Genre
  'မြန်မာဝတ္ထု', 'Burmese novel', 'အချစ်ဝတ္ထု', 'မြန်မာစာပေ',
  'Burmese literature', 'လူငယ်ဝတ္ထု',
  
  // Themes
  'အချစ်', 'အချစ်ဇာတ်လမ်း', 'ချစ်ခြင်းမေတ္တာ', 'အလွမ်းဝတ္ထု',
  'အလွမ်းဇာတ်လမ်း', 'ခွဲခွာခြင်း', 'လွမ်းဆွတ်ခြင်း', 'တမ်းတခြင်း',
  'အဆက်ဖြတ်စာ', 'နှလုံးသားအချစ်',
  
  // Story Elements
  'ရာမဇာတ်တော်', 'ဒသဂီရိ', 'မယ်သီတာ', 'ကျောင်းကပွဲ',
  'ကျောင်းသားဘဝ', 'ပထမအချစ်', 'First love Myanmar', 'မှော်ဘီ',
  
  // Format
  'Myanmar ebook', 'မြန်မာအီးဘွတ်', 'ဝတ္ထု', 'Web novel Myanmar',
  'အွန်လိုင်းဝတ္ထု', 'ဖုန်းဖတ်စာ', 'Mobile reading',
  
  // Audience
  'မြန်မာစာဖတ်ပရိသတ်', 'Myanmar readers', 'စာဖတ်သူ', 'စာအုပ်စာပေ',
  'မြန်မာစာအုပ်', 'Myanmar book',
  
  // Related
  'မြန်မာရသစာပေ', 'Myanmar fiction', 'ဝတ္ထုတို', 'ဝတ္ထုရှည်',
  'မြန်မာစာရေးဆရာ', 'Myanmar author',
  
  // Emotional
  'ကြေကွဲဖွယ်', 'ရင်ခုန်ဖွယ်', 'ချစ်စရာ', 'ဖတ်ကောင်းသောဝတ္ထု',
  'စိတ်ဝင်စားဖွယ်ဝတ္ထု', 'Emotional story', 'Heart touching',
  
  // Variations
  'ချစ်သဲဝတ္ထု', 'မိုးဟေကိုဝတ္ထု', 'ချစ်သဲစာအုပ်',
  'Chit Thae book', 'Chit Thae novel', 'Moe Hay Ko', 'Moe Hay Ko novel',
  
  // Long-tail
  'မြန်မာအချစ်ဝတ္ထုများ', 'လက်ရှိဖတ်ကောင်းသောဝတ္ထု',
  'မြန်မာဝတ္ထုအသစ်',
  'Burmese love story', 'Myanmar romantic novel',
],
  
  // Open Graph / Facebook / LinkedIn / Telegram
  openGraph: {
    title: 'မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ',
    description: 'မင်းက အမေ့နဖူး မှာ နားနေတဲ့ယင်ကို ကျည်ပွေ့နဲ့ရိုက်သတ်တဲ့သမီးလို မမိုက်ချင်ခမ်းပါနဲ့ လို့ ပြောခဲ့တာ ကို မမေ့ပါဘူး ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။',
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
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'မိုးဟေကိုသို့ တမ်းချင်း - ချစ်သဲ',
    description: 'မင်းက အမေ့နဖူး မှာ နားနေတဲ့ယင်ကို ကျည်ပွေ့နဲ့ရိုက်သတ်တဲ့သမီးလို မမိုက်ချင်ခမ်းပါနဲ့ လို့ ပြောခဲ့တာ ကို မမေ့ပါဘူး ဒါပေမဲ့ မိုးရာ ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး လမ်းလျှောက်သလို ဖြစ်နေပါစေ ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။',
    images: ['https://moehayko-love.vercel.app/cover.jpg'],
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

        <meta name="google-site-verification" content="PoQxpdNOpZFCjqo2D6lSX0LfJg1tT7bRwSi6wRBNy1g" />

        
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