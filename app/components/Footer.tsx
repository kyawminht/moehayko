'use client';

import { Box, Typography, Divider } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: { xs: 6, md: 8 },
        pt: { xs: 3, md: 4 },
        pb: { xs: 4, md: 5 },
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ maxWidth: 650, mx: 'auto', textAlign: 'center' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', sm: '1rem' },
            lineHeight: 2,
            color: 'text.secondary',
            mb: 2,
          }}
        >
          ဆယ်ကျော်သက် ဘဝ တုန်းက စာရေးဆရာ အရူး အမူး ဖြစ်ချင်ခဲ့တယ်။ ဒါ့ကြောင့် စာတွေရေးတယ် နံရံတွေပါ ကပ်တယ်။ 
          ဗလာစာရွက်မှာ ဝတ္ထု အဖြစ်ရေး စာအုပ်ချုပ် ပြီးသူများတွေကို ဖတ်ခိုင်းတယ်။
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', sm: '1rem' },
            lineHeight: 2,
            color: 'text.secondary',
            mb: 2,
          }}
        >
          ရွာက ကျောင်းဆရာတွေ စာမသင်ကျောင်းကို မလာကြတဲ့အကြောင်း ကဗျာတွေစပ်ပြီး လိုက်ကပ်တယ်။ 
          ကံကောင်းလို ထောင်မကျတယ်။😂😂
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', sm: '1rem' },
            lineHeight: 2,
            color: 'text.secondary',
            mb: 2,
          }}
        >
          ရေးခဲ့တဲ့စာတွေကတော့အများကြီးပဲ စာအုပ်ဘဝ ရောက်တာဆိုလို ဒီ တစ်အုပ်ပဲရှိခဲ့တယ်။
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', sm: '1rem' },
            lineHeight: 2,
            color: 'text.secondary',
            mb: 3,
          }}
        >
          လွန်ခဲ့တဲ့ ၂၀၁၂ ဆိုတော့ ခေတ်တွေလည်း ပြောင်းခဲ့ပြီ ။
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '0.95rem', sm: '1rem' },
            lineHeight: 2,
            color: 'text.secondary',
            mb: 3,
            fontStyle: 'italic',
          }}
        >
          ဒီစာအုပ်က ဘယ်သူ့ကိုမှ နစ်နာလို စိတ်မရှိပါဘူး ဆိုတာ ပြောချင်တာပါ။
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '1rem', sm: '1.1rem' },
            lineHeight: 2,
            color: 'text.primary',
            fontWeight: 500,
          }}
        >
          ကျေးဇူးပါ ဗျ
        </Typography>

        <Divider sx={{ my: 3, maxWidth: 200, mx: 'auto' }} />

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            fontSize: { xs: '0.75rem', sm: '0.875rem' },
          }}
        >
          © {new Date().getFullYear()} Chit Thae
        </Typography>
      </Box>
    </Box>
  );
}