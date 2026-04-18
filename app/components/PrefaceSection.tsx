'use client';

import { Box, Typography } from '@mui/material';

export default function PrefaceSection() {
  return (
    <Box id="preface" sx={{ mb: 8 }}>
      <Typography variant="h4" fontWeight={500} gutterBottom sx={{ mb: 3 }}>
        စာရေးသူမှ စာဖတ်သူသို့
      </Typography>
      <Typography variant="body1" paragraph>
        ကျွန်ုပ်နှင့် ကျွန်ုပ်၏ချစ်သူ မိုးဟေကို မှာ အ.ထ.က(၁)မှော်ဘီတွင် စတင်သိကျွမ်းခဲ့သည်။
      </Typography>
      <Typography variant="body1" paragraph>
        &ldquo;သစ်ပင်မှာအမြစ်၊ ပြည်မှာစစ်၊ လူမှာအချစ်&rdquo; ဟူသော ဆိုရိုးအတိုင်း သူနှင့်ကျွန်တော် ချစ်ကြိုက်ခဲ့ပါသည်။
      </Typography>
      <Typography variant="body1" paragraph>
        သူနှင့် ကျွန်ုပ်၏ အချစ်ကြိုးမှာ အတန်ကြာခိုင်မြဲခဲ့ပါ၏။ သို့သော် တစ်နေ့တွင် သူကကျွန်ုပ်အား အဆက်ဖြတ်သွားခဲ့သည်။
        &ldquo;ပြည်တန်ပတ္တပြားကို ဆန်တစ်ပြည်နှင့် လဲလိုက်ခြင်းပင်&rdquo;။
      </Typography>
      <Typography variant="body1" paragraph>
        မိုးပြောခဲ့သည့်စကားများကို ကျွန်ုပ်အခုထိ အမှတ်တရရှိနေသေး၏။{' '}
        &ldquo;မိုးတိုနှစ်ယောက် လောကဓံကို မကြောက်ပဲ၊ ရဲရဲ လက်တွဲကြအောင်နော်မောင်&rdquo; တဲ့။
      </Typography>
      <Typography variant="body1" paragraph>
        ခုတော့... &ldquo;မယ်ပြိုင်ပွဲလည်း ဝင်ချင်သေးရဲ့၊ ပေါင်ပေါ်မှာလဲကြောက်ရဲ့&rdquo; ဆိုတဲ့ ရှေးစကားပုံအတိုင်း
        ဖြစ်နေပါသည်။
      </Typography>
      <Typography variant="body1" paragraph>
        အကယ်၍ မိုးဟေကိုတစ်ယောက် ဤမှတ်တမ်းကို ဖတ်မိခဲ့ပါလျှင် ကျွန်ုပ် ပင်ပန်းရကျိုးနပ်ချေပြီ။
      </Typography>
      <Typography variant="body1" paragraph sx={{ fontStyle: 'italic', color: 'text.secondary' }}>
        (မတော်တဆ ကျွန်ုပ်၏ချစ်သူ မိုးဟေကိုနှင့် နာမည်တူရှိခဲ့လျှင် ထိုသူကိုမရည်ရွယ်ကြောင်း အသိပေးလိုပါသည်။
        ကျွန်ုပ်ချစ်ရသောသူ မိုးဟေကိုကိုသာ ရည်ရွယ်ပါသည်။ ဤကား စကားချပ် - စာရေးသူ)
      </Typography>
    </Box>
  );
}