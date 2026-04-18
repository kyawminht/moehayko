'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function EpilogueSection() {
  return (
    <Box id="epilogue" sx={{ mb: 8 }}>
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          height: { xs: 250, sm: 300, md: 350 }, 
          my: 4,
          maxWidth: 600,
          mx: 'auto',
        }}
      >
        <Image
          src="/images/chilli.jpg"
          alt="အရောင်ခြယ် ဇာတ်လမ်း"
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </Box>
      <Typography variant="h4" fontWeight={500} gutterBottom sx={{ mb: 3 }}>
        အရောင်ခြယ် ဇာတ်လမ်း
      </Typography>
      <Typography variant="body1" paragraph>
        အတိတ်ကို ပြန်တွေးမိတိုင်း ရင်ထဲကချစ်သူကို တမ်းတမိသည် တိတ်တခိုး အမြတ်တနိုးနဲ့ ချစ်ခဲ့မိတာတောင် မတူညီခြားနားတဲ့
        လူ့အသိုင်းဝိုင်းတစ်ခုကြောင့် ငါတို ဝေးခဲ့ရလေပြီလား ... ချစ်သူရယ် ...။
      </Typography>
      <Typography variant="body1" paragraph>
        ကံကြမ္မာက ငါ့ဘဝကို အမှောင်ချပြီး ရက်စက်ထားခဲ့တာတောင် လောင်ကျွမ်းမဆုံးတဲ့ ရင်ထဲက အချစ်မီးကို
        ဘယ်သူငြိမ်းနိုင်မှာလဲ ...
      </Typography>
      <Typography variant="body1" paragraph>
        ငါ့အနာဂတ် ဖြူစင်အောင် အတိတ်က ဇာတ်လမ်းတွေကို ပစ္စုပ္ပန်မှာ အရောင်ခြယ် လေလွှင့်လိုက်ပြီ ချစ်သူရယ် ...
      </Typography>
    </Box>
  );
}