'use client';

import { Box, Typography } from '@mui/material';

export default function HandwrittenLetter() {
  return (
    <Box
      sx={{
        my: 4,
        p: { xs: 2.5, sm: 3.5 },
        backgroundColor: '#faf9f6',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        fontFamily: '"Kalam", "Caveat", cursive',
        backgroundImage: 'linear-gradient(to bottom, #faf9f6 0%, #f5f2eb 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 24px, rgba(0, 0, 0, 0.03) 24px, rgba(0, 0, 0, 0.03) 25px)',
          pointerEvents: 'none',
          borderRadius: 2,
        },
      }}
    >
      <Typography
        variant="body1"
        paragraph
        sx={{
          fontFamily: 'inherit',
          fontSize: { xs: '1rem', sm: '1.1rem' },
          lineHeight: 2.1,
          color: '#1a1a1a',
          textIndent: '2em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        မိုး
      </Typography>
      
      <Typography
        variant="body1"
        paragraph
        sx={{
          fontFamily: 'inherit',
          fontSize: { xs: '1rem', sm: '1.1rem' },
          lineHeight: 2.1,
          color: '#1a1a1a',
          textIndent: '2em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        မင်းကိုယ့်ကို မေ့သွားပြီလား။ ကိုယ်ကတော့ မင်းကို တစ်နေ့မှ မေ့လိုမရပါဘူး။ မင်းနောက်တရောက်နဲ့ တွဲနေပြီဆို။
        <strong>မွဲချင်တဲ့ခွေး ပြာပုံ တိုးသလို</strong> ဖြစ်နေပါ့မယ်။ မင်း ကိုယ်နဲ ခင်၀◌င့်၀◌ါ ရ နဲ့ပြီးမှ လာကြိုက် လို့ မရဘူး။
        အဲဒါကြောင့် <strong>မိုးရွာတုန်းရေခံ၊ နေပူတုန်း စပါးလှန်း ဆိုသလို လသာတုန်း ဗိုင်းငင်</strong> ပါကွာ။ <strong>ရေခမ်းမှ
        လှေ လှော်ချင် လို့ မရဘူး</strong> ဆိုတာ မင်းသိထားစမ်းပါ
      </Typography>
      
      <Typography
        variant="body1"
        paragraph
        sx={{
          fontFamily: 'inherit',
          fontSize: { xs: '1rem', sm: '1.1rem' },
          lineHeight: 2.1,
          color: '#1a1a1a',
          textIndent: '2em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        ကိုယ်ခုထန်းပင်ပေါ် ထန်းလျက်ချက်နေပါ။ <strong>ကောင်းကင် တမွတ် ကြယ်ကိုဆွတ်</strong> ဆိုသလိုပေါ့။ <strong>ကံဆောင်မှ ပြောင်
        ကြံနိုင် မှ အောင်</strong>လို့လဲ ပြောလို့ရတာပေါ့။ မင်းတို့ မိသားစုက <strong>မြေနိမ့်ရာ လှန်စိုက်</strong>တတ် ပေမဲ့ ကိုယ်က တော့
        မစိုက် တတ်ပါဘူး ဘာလို့ဆို တော့ ကိုက လှံမှ မရှိ ဘဲ။ ကို<strong>ယ့်ထမင်းကိုယ်စားပြီး ကြီးဒေါ် နွားတော့
        မကျောင်းနိုင်ပါဘူး</strong> ဒါပေမဲ့မိုးရာ <strong>ငရုတ်သီးမှန်ရင် ရေခုနလှံ ငုပ်ပြီးတော့စားတောင် စပ်
        ပါတယ်</strong>ကွာ... မင်းက <strong>အမေ့နဖူး မှာ နားနေတဲ့ယင်ကို ကျည်ပွေ့နဲ့ရိုက်သတ်တဲ့သမီး</strong>လို မမိုက်ချင်ခမ်းပါနဲ့ လို့
        ပြောခဲ့တာ ကို မမေ့ပါဘူး ဒါပေမဲ့ မိုးရာ <strong>ငါး ရံ့ ခေါင်းပေါ် ကို ခေါင်းလျှော်ရည် လောင်းပြီး
        လမ်းလျှောက်သလို ဖြစ်နေပါစေ</strong> ကိုယ်မင်းကို ချစ်နေအုံးမှာပါပဲ။
      </Typography>
      
      <Typography
        variant="body1"
        paragraph
        sx={{
          fontFamily: 'inherit',
          fontSize: { xs: '1rem', sm: '1.1rem' },
          lineHeight: 2.1,
          color: '#1a1a1a',
          textIndent: '2em',
          position: 'relative',
          zIndex: 1,
        }}
      >
        မင်းကိုယ့်ကို ခွဲသွားပြီးကတည်းက ကိုယ့်မှာ ဆန်ကိုးလုံးချက်ကို မ၀ဘူး ဖြစ်နေတယ်။ အိမ်မှာ ဆန်လည်းကုန်တော့မယ်။
        အဲဒါကြောင့် မင်းကိုယ့်ကို သနားရင် ကိုယ့်ဆီ ပြန် လာပါကွာ။
      </Typography>
      
      <Typography
        variant="body1"
        sx={{
          fontFamily: 'inherit',
          fontSize: { xs: '1rem', sm: '1.1rem' },
          lineHeight: 2.1,
          color: '#1a1a1a',
          position: 'relative',
          zIndex: 1,
          mt: 3,
        }}
      >
        ဒါပါပဲ။
      </Typography>
    </Box>
  );
}