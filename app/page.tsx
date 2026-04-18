'use client';

import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Sidebar from './components/Sidebar';
import MobileHeader from './components/MobileHeader';
import CoverSection from './components/CoverSection';
import PrefaceSection from './components/PrefaceSection';
import TableOfContents from './components/TableOfContents';
import ChapterContent from './components/ChapterContent';
import HandwrittenLetter from './components/HandwrittenLetter';
import EpilogueSection from './components/EpilogueSection';
import { chapters } from './data/chapters';
import NextImage from 'next/image';
const drawerWidth = 260;

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeChapter, setActiveChapter] = useState('cover');
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToChapter = (chapterId: string) => {
    const element = document.getElementById(chapterId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveChapter(chapterId);
      if (isMobile) {
        setMobileOpen(false);
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const chapter of chapters) {
        const element = document.getElementById(chapter.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveChapter(chapter.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <MobileHeader onMenuClick={handleDrawerToggle} drawerWidth={drawerWidth} />

      <Box component="nav">
        <Sidebar
          activeChapter={activeChapter}
          onChapterClick={scrollToChapter}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />
        <Sidebar
          activeChapter={activeChapter}
          onChapterClick={scrollToChapter}
          variant="permanent"
          drawerWidth={drawerWidth}
        />
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          width: { md: `calc(100% - ${drawerWidth}px)` },
          mt: { xs: 7, md: 0 },
          p: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Container maxWidth="md" disableGutters>
          <CoverSection />
          <PrefaceSection />
          <TableOfContents />

          {/* Chapter 1 */}
          <ChapterContent id="chapter1" title="မိုး၏ဖြတ်စာ">
            <Box sx={{ 
              bgcolor: '#faf9f6', 
              p: { xs: 2.5, sm: 3.5 }, 
              borderRadius: 2, 
              border: '1px solid', 
              borderColor: 'divider',
              mb: 4,
            }}>
              <Typography variant="body1" paragraph align="center" sx={{ fontStyle: 'italic' }}>
                ဗုဒ္ဓံ သရဏံ ဂစ္ဆာမိ၊ ဓမ္မံ သရဏံ ဂစ္ဆာမိ၊ သံဃံ သရဏံ ဂစ္ဆာမိ
              </Typography>
              <Typography variant="body1" paragraph>
                ချစ်သဲ၊
              </Typography>
              <Typography variant="body1" paragraph>
                မိုး စာရေးလိုက်ပါတယ်။ မိုးအရင်းဆုံး မောင့်ကို တောင်းပန်ချင်ပါတယ်။ ဘာဖြစ်လို့လဲဆိုတော့ မောင့်ကို မောင်လို မခေါ်ဘဲ
                ချစ်သဲလို့ ခေါ်လိုက်တဲ့အတွက်ပါ။ မောင့်ကို အရင်တုန်းက မောင်လို့ခေါ်ပေမယ့် ခုမခေါ်တော့ဖို့ ဆုံးဖြတ်လိုက်ပြီ။
                ဘာကြောင့်ရယ်လို့ မမေးပါနဲ့တော့။ &ldquo;ဒသဂီရိကို မယ်သီတာချစ်လို့မရပါဘူး&rdquo;။
              </Typography>
              <Typography variant="body1" paragraph>
                ဘာပဲဖြစ်ဖြစ် မောင်၊ မိုးကို မေ့လိုက်ပါတော့။ မိုးလည်း မောင့်ကို မေ့လိုက်ပြီ။ မောင်တစ်ယောက် ဒုစရိုက်ရှောင်၍
                သုစရိုက်စောင်နိုင်ပါစေ။
              </Typography>
              <Typography variant="body1">
                လေးစားမှုဖြင့်၊<br />
                မိုး<br />
                (မိုးဟေကို)<br />
                ပထမနှစ်၊ မြို့ပြအင်ဂျင်နီယာ
              </Typography>
            </Box>

            <Typography variant="body1" paragraph>
              အထက်ပါစာမှာ မိုးက ကျွန်ုပ်အား နောက်ဆုံး..
            </Typography>
            <Typography variant="body1" paragraph>
              ပေးသွားသော အဆက်ဖြတ်စာပင် ဤစာ ကျွန်ုပ်ထံမှ ရောက်လာချိန်မှ သူနှင့်ကျွန်ုပ် အဆက်အသွယ်ပြတ်သွား ခဲ့သည်။
              ကျွန်ုပ်ဘက်က ဖြတ်ခြင်းမဟုတ်၊ သူ့ဘက်က ဖြတ်ခြင်းပင်။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်မှာ သူ့အားမတွေ့ရ မမြင်ရလျှင် အမိခဲ့သား ရေနည်းငါးသို့ ဖြစ်နေသည်။ ထို့ကြောင့် သူ့အိမ်သို့ ကျွန်ုပ်
              သွားတွေ့ခဲ့ပါသည်။ သို့သော် သူကမက အတွေ့မခံပေ။ &ldquo;တည်မိတဲ့ဘုရား၊ လင်းဒပင်နားနား၊ ဆက်တည်မှာပဲ&rdquo; ဟု
              ကျွန်ုပ်အား ပြောလွှတ်လိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              နောက်ပိုင်းတွင် သူမက အတွေ့မခံ၍ ကျွန်ုပ်လည်း သွားမံတွေ့ဟော့ပေး သူမအိမ်က ခြံစည်းရိုးလုံခြုံစေရန်
              အုတ်နံရံခတ်သားသေး၏။ ထို့ကြောင့် ညဘက် ခြံစည်းရိုးကို ကျော်ပြီးသွားတွေ့ရန်လည်း မဖြစ်နိုင်။ ခြံအပြင်သို့ သု
              ထွက်လာပါစေဟု ဆုတောင်းနေရုံကလွဲ၍ အခြားနည်းလမ်း မရှိပေ။ ကျွန်ုပ်အတွက် ကံကောင်းခြင်းလို့ပဲ ဆိုရမလား
              တစ်နေ့ သူနှင့်ကျွန်ုပ် လမ်းမှာ မထင်မှတ်ဘဲ ဆုံတွေ့သည်။ ကျွန်ုပ်က တွေ့ချင်နေတဲ့သူဆိုတော့ &ldquo;စားရကံကြုံလို့
              မုတ်ဆိတ်ပျားစွဲ&rdquo; ချေပြီ ဟုတွေးပြီး ဝမ်းသာအားရနဲ့ ကျွန်ုပ်က နှုတ်ဆက်လိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဟာ . . . မိုးပါလား . . . မတွေ့တာတောင် တော်တော်ကြာနေပြီနော်၊ ကိုယ်မင်းကို . . . .
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်စကားဆုံးပင်မဆုံးသေး။ သူက ဘယ်ဖက် လက်ဝါးတွင် စိပ်ပုတီးချိတ်ကာ၊ ပါးစပ်ရှေ့တွင် အပြားလိုက်
              ထောင်ပြီး တရုတ်ဘုန်းကြီးစတိုင်မျိုးဖြင့်
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;အို မီ သော် ဖော်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ဟုပြောပြီး လှည့်ထွက်သွားသည်။ ကျွန်ုပ်မှာ နားမလည်နိုင်စွာ ဒါဘယ်ဘာသာစကားပါလိမ့်၊ ကရင်လဲ မဟုတ်ပါဘူး။
              ဧကန္တ ခေတ်ပေါ်ဗန်းစကားထင်ရဲ့၊ ငါလဲ အညံ့ခံလို့ မဖြစ်ဘူးဟု တွေးကာ သူမနောက်သို့ ပြေးလိုက် သွားပြီး
              တရုတ်အက်ရှင်မင်းသား ဂျက်လီစတိုင်မျိုးဖြင့်
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;နာရှိညှော်ရှောင်၊ ညှော်မရှောင်နာရင်း&rdquo; ဟု ပြန်၍ ပက်ထည့်လိုက်တော့သည်။
            </Typography>
          </ChapterContent>

          {/* Chapter 2 */}
          <ChapterContent 
            id="chapter2" 
            title="တွေ့ဆုံရင်ခုန်ခြင်း"
            imageSrc="/images/heart.jpg"
          >
            <Typography variant="body1" paragraph>
              မိုးကကျွန်ုပ်အား အဆက်ဖြတ်သွားသော်လည်း ကျွန်ုပ်က သူ့အားချစ်ဆဲ။ သို့အတွက် စာရှူ သူများအား သူနှင့်ကျွန်ုပ်
              ဆုံတွေ့ခဲ့ပုံလေးကို ပြောပြချင်ပါသည်။
            </Typography>
            <Typography variant="body1" paragraph>
              မိုးနှင့်ကျွန်ုပ်မှာ အ ထ က(၁)မှော်ဘီတွင် စ၍သိကျွမ်း ခဲ့ကြ ခြင်းပင်။ ကျွန်ုပ်မှာ အခြားသူများလို
              အပေါင်းအသင်း မများလှပေ။ အခန်းထဲတွင် ထိုင်ပြီးတွေးချင်ရာတွေး၊ ငေးချင် ရာငေး တက်တဲ့သူဆိုတော့
              အခန်းဖော်များနှင့် သစ်ပြီးရင်းနှီးတဲ့သူရယ်လို့ မရှိလှပေ။ အဲ ကျုပ်နဲ့သိတာ သိတာဆိုလို့ မိုးတစ်ယောက်ရှိသပေါ့လေ။
              သိပုံကလဲ ဒီလိုဗျ . . .
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်တို့ကျောင်းမှာ ကျောင်းကပွဲက နှစ်စဉ်နှစ်တိုင်း ရှိတယ်လေ။ ဒီနှစ်တော့ ခါတိုင်းနှစ်တွေထက် ပြီး
              စည်စည်ကားကား ကြီးကြီးကျယ်ကျယ် လုပ်မယ်လို့ ကျောင်းတပ်ကြီးက ခဏခဏပြောတယ်။ ဒါက ကျွန်ုပ်ဘူးလေ။
              သူ့ဟာသူ ကြီးကြီးပဲလုပ်လုပ် ငယ်ငယ်ပဲလုပ်တိုင်း တချို့တွေကတော့ ကျောင်းကပွဲမှာ ပါဝင်
              အသည်းအသန်ကြိုးစားနေကြပေမဲ့ ကျွန်ုပ်က အဲဒါတွေကို စိတ်မဝင်စားဘူးလေ။ ပြီးတော့ <strong>ဘဲဥတစ်လုံးထဲနဲ့ ဘုန်းကြီး
              ဆွမ်းမကျွေးချင်ဘူး</strong>။
            </Typography>
            <Typography variant="body1" paragraph>
              အဲဒါကြောင့် ကျောင်းကပွဲကိုလည်း ဂရုမစိုက်ဘူး။ ကျောင်းကပွဲဖြစ်မြောက်ရေးအဖွဲ့နဲ့လည်း ကင်းအောင် နေခဲ့တယ်။
            </Typography>
            <Typography variant="body1" paragraph>
              ဒါပေမဲ့ လူဆိုတာ ဘုန်းနဲ့ကံနဲ့လာသတဲ့။ အဲဒီ စကားပဲမှန်နေလားမသိဘူး။ ကျောင်းကပွဲကျင်းပမယ့် မနက်ပိုင်းမှာ သူ
              (မိုးဟေကို) နဲ့ ကျောင်းအုပ် ကျွန်ုပ်ဆီ အလောတကြီးနဲ့ ရောက်လာတယ်။ ရောက်ရောက်ချင်းပဲ ကျောင်းအုပ်ကြီးက
              &ldquo;ချစ်သဲ၊ ငါ့ကိုကူညီပါတုံးကွာ၊ ပညာရေးဝန်ကြီး လည်း လာတယ်ကွ၊ သူ့ရှေ့မှာ ငါအရှက်မကွဲချင်ဘူးကွာ နော် . .
              ငါ့တပည့် ငါ့ကို ကူညီပါအုံးကွာ&rdquo; လို့ဖိနိုပ် လက်ကိုကိုင်ပြီး <strong>သုံးတုံးကုန်မှ ခွေးချေးမှန်းသိတဲ့ မျက်နှာ</strong>နဲ့
              ပြောလာသည်။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်က သူဘာတွေလာပြောနေသည်ကိုမှမသိဘဲ။ သို့အတွက် &ldquo;နေပါဦးဆရာ၊ ကူညီတာကဟုတ်ပါပြီး ကျွန်တော်က ဘာကို
              ဘယ်လိုကူညီရမှာလဲ&rdquo; ဟု ကျွန်ုပ်က စိတ်မရှည်စွာ ပြောလိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              ဒီမှာတင် မိုးက &ldquo;ဒီလိုပါ အစ်ကို၊ ဆရာ စကားပြောလောသွားလို့ပါ။ ကျွန်မတို့ ခုကပွဲမှာ ရာမဇာတ်ကိုကမယ်။ အဲဒီမှာ
              ရာမ လုပ်မယ့်သူ၊ မယ်သီတာလုပ်မယ့်သူ အကုန်ရှိတယ်။ ဒဿ ဂီရိလုပ်မယ့်သူမရှိလို့ပါ။ အစ်ကို ဒသဂီရိနေရာမှာ ဝင်က
              နိုင်မလားလို့ပါ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;အစတုန်းက သလုပ်မယ့်သူ ရှာမထားဘူးလား&rdquo; ကျွန်ုပ်က မေးလိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဟုတ်ကဲ့ရွာ ရှာထားပါတယ်အစ်ကို&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဒါဆို အဲဒီလူက ဘယ်ရောက်သွားလို့လဲလို့&rdquo; ကျွန်ုပ်က စိတ်တိုစွာမေးတော့ &ldquo;အဲဒီလူ ခုနကဖုန်းဆက်ပါသေးတယ်၊
              ရေသောက်ရဦး များမယ် မအားဘူးတဲ့&rdquo; အဲဒါကြောင့် အစ်တို့ကို အကူ အညီတောင်းတာပါနော်အစ်ကို . . .
              ကူညီပါနော်&rdquo; ဆိုပြီး ကျွန်ုပ်ကို ပတ်ခွဲျနှပမခွဲျနဲ့ ပြောတယ်။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်က &ldquo;အချင်ကောင် မှ မဟုတ်ပဲ <strong>အိုင်တွေ့လို့မ မလူးရင်တော့ ကျွဲရူးပဲဖြစ်မှာပေါ့</strong>၊ ကျတော်က တခါမှ
              ကဘူးတာမဟုတ်ဘူး။ ပြီးတော့ ရာမဇာတ် ကိုလည်း မကြည့်ဖူးဘူး၊ <strong>ပုဆိုးမပါတဲ့သူကို လုံအောင်ထိုင်ခိုင်းသလို</strong>
              ဖြစ်နေမှာပေါ့&rdquo; လို့ ကျွန်ုပ်က နှစ်ယောက်လုံးကို ကြည့်ပြီး ပြောလိုက်တယ်။
            </Typography>
            <Typography variant="body1" paragraph>
              ဒီမှာတင် ဆရာကြီးက &ldquo;မင်း အဲဒါတော့ မပူပါနဲ့ကွာ မီးစင်ကြည့်ကဆိုတဲ့ စကား မင်းကြားဖူးမှာပါ&rdquo;။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်အနည်းငယ် တွေဝေ သွား၏။ &ldquo;ဟင်း&rdquo; ကျွန်ုပ်သက်ပြင်းရှည်ကြီးကို ချပြီး တစ်ဖက်လှည့်၍ စဉ်းစားလိုက်သည်။
              ကျောင်းအုပ်ကြီးနှင့် မိုးမှာ ကျွန်ုပ်ကို မျှော်လင့်ချက်ကြီးသောမျက်လုံးများဖြင့် နှစ်ယောက်လုံး ကြည့်နေမည်ကို
              ကျွန်ုပ်လှည့်မကြည့်ပဲနှင့်သိနေ၏။
            </Typography>
            <Typography variant="body1" paragraph>
              မီးနစ်အနည်းငယ်ကြာသော် ကျွန်ုပ်က ဆုံးဖြတ်ချက် တစ်ခုကို ခိုင်မာစွာချလိုက်သည်။ ကျောင်းအုပ်နှင့် မိုးဘက်သို့
              ကျွန်ုပ်၏မျက်နှာလှည့်လိုက်ပြီး မိုး၏မျက်လုံးကို စိုက်ကြည့်ကာ &ldquo;<strong>မချစ်သော်လည်း အောင့်ကာနမ်းရမှာပေါ့</strong>&rdquo; ဟု
              ကျွန်ုပ်က ပြောလိုက်တော့မှ ဆရာကြီးပြုံးနိုင်တော့သည်။ မိုးကဘယ်လို နားလည်လဲတော့မသိဘူး ကျွန်ုပ်ကို
              မျက်စောင်းတစ်ချက် ဒိုင်းခနဲထိုးလိုက်တယ်။
            </Typography>
            <Typography variant="body1" paragraph>
              ဒိတ် ဒိတ်<br />
              ဒိတ် ဒိတ်
            </Typography>
            <Typography variant="body1" paragraph>
              ဟိုက် ဘာသံပါလိမ့်။ ဩော် ကျွန်ုပ်ရင်ဘတ်ထဲက လာတဲ့အသံပဲ။ ညာလက်ဖြင့် ကျွန်ုပ်၏ဝဲဘက်ရင်အုံပေါ်သို့ တင်လိုက်ပြီး
              ရင်ခုန်နေခြင်းလားဟု ကိုယ့်ကိုယ်ကို မေးခွန်း ထုတ်နေမိတော့သည်။
            </Typography>
          </ChapterContent>

          {/* Chapter 3 */}
          <ChapterContent 
            id="chapter3" 
            title="နံချပ်ကူ"
            imageSrc="/images/brues.jpg"
            imageHeight={200}
          >
            <Typography variant="body1" paragraph>
              နောက်တစ်နာရီခန့်ကြာလျှင် ကျွန်ုပ်မှာ ဒသဝတ်စုံ နှင့်ဖြစ်နေပြီ။ စာဖတ်သူတိုသိတဲ့အတိုင်းပဲလေ။ ဒသဝတ်စုံ ဆိုတော့
              ခေါင်းမှာ ယောင်ထုံးနဲ့၊ နဖူးပတ် လက်ပတ်နဲ့ ကျောကဝတ်ရုံနဲ့ ရှုပ်ရှက်ခတ်လိုဆိုတော့ ကျွန်ုပ်မှာ အလွန်း စိတ်ရှုပ်နေသည်။
              ဒီကြားထဲ ကျောင်းအုပ်ကြီးက ကျွန်ုပ်အား မိန့်ခွန်းခြွေနေသေး၏။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဒသဆိုတာ ကြမ်းတမ်းရမယ်၊ ခက်ထန်ရမယ်၊ လူ တစ်ယောက်ကိုကြည့်ရင် ဘုကြည့်ကြည့်ရမယ်။ သန်လျှက် -ကြီး
              လက်ကကိုင်ပြီးတော့ပေါ့ အဲ သန်လျှက်ဆိုလို မင်း သန်လျှက်ရှာထားအုံး၊ ကခါနီးမှ လိုက်ရှာနေရအုံးမယ်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဆရာကြီးရာ ကျွန်တော် ဒသလုပ်မယ့်အစား မိုးဖင် (အဲလေ) <strong>ကျားဖင်သာပြေးနှိက်</strong>ချင်တော့တယ်ဗျာ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ဆရာက ကျွန်ုပ်အား သန်လျှက်ရှာဆိုလို့ကျွန်ုပ် လိုက်ရှာသည်။ သိုသော် စစ်သားများရှေ့တန်းစစ်မြေပြင်တွင်
              ဖွန်ကြောင်ရန်အတွက် စော်လိုက်ရှာသလိုဖြစ်နေပါသည်။ ထိုကြောင့် လိုက်မရှာတော့ဘဲ ကျွန်ုပ်၏သူငယ်ချင်း တရုတ်
              အက်ရှင်မင်းသား ဘရုစ်စလီအားဖုန်းဆက်ပြီး နံချပ်ကူ ငှားလိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              နံချပ်ကူပဲဖြစ်ဖြစ်၊ သန်လျှက် ဖြစ်ဖြစ် အဓိကက ကြမ်းဖိုရမ်းဖိုပဲ မဟုတ်လားနော့်။ နံချပ်ကူကို ကိုင်ပြီး
              ကျွန်ုပ်ကြည့်လိုက်သည်။ ခုမှ ဒသနဲ့ ပိုတူသွားသလို။ နံချပ်ကူအား ကိုင်ပြီး ကျွန်ုပ် နှစ်ပတ်လောက် လှည့်လိုက်သည်။ ဤတွင်
              ကျွန်ုပ်၏ခေါင်းတား နံချပ်ကူ တစ်ချောင်းလာရိုက်မိသည်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ခွပ်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;အား&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ် တော်တော်နာသွား၏။ အင်း ငါ နံချပ်ကူ လှည့်တတ်အောင် ကျင့်တုံးမှဟု ရေရွတ်မိသည်။
            </Typography>
          </ChapterContent>

          {/* Chapter 4 */}
          <ChapterContent 
            id="chapter4" 
            title="စစ်ရထား"
            imageSrc="/images/war.jpg"
          >
            <Typography variant="body1" paragraph>
              စင်္ကြာမှ နှစ်တရာ၊ ကမ္ဘာမှာ သိန်းထား၊ ဘုရားမှာသောင်းရှစ် ၊မောနေယမှာ ခနစ်နှစ်၊ တောင်ဆယ်
              လုံးအစိုးရ ငါဟဲ့ ဒသ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ဟု ကျွန်ုပ် အသံဝါကြီးဖြင့် ကြွေးကြော်လိုက်ပြီး ဇာတ်စင်ပေါ်သို တက်ရန်ဟန်ပြင်လိုက်ရာ
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဟျောင့် . .ဒသက စစ်ရထားနဲ့သွားရမှာလေ မင်းကြီးဒေါ်နဲ့သွားမှာလား၊ သွား စစ်ရထားပြန်ယူချေ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              အင်း . ဆရာကြီး ဒီလောက်စိတ်တိုနေပုံ ထောက်ရင် ဧကန္တ သူ့သမီးကို <strong>ချက်တီးမှတ်လိုပေးစားတာ မိုးလင်းခါမှ -
              ဘိုးသူတော်မှန်းသိ</strong>လာလို့ထင်ပါရဲ့။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်က သူပြောတဲ့ စစ်ရထားကို ရှာ၏။ မတွေ့ပေ။ ဇာတ်စင်တစ်ခုလုံးလည်း နှံ့နေပြီ။ ကျောင်း တိုင်မှီပြီး
              ထောင်ထားတဲ့ ကျောင်းသားစက်ဘီးတစ်စီးတော့ တွေ့တယ်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;တောက် . . ဒီသောက်ရထားက ဘယ်မှာသွားပြီး ပုန်းနေလဲမသိဘူး၊ စစ်ရထားမတွေ့ တွေ့တာနဲ့ပဲ ဇာတ် စင်ပေါ်
              တက်ရမှာဘဲ&rdquo; ဟု ဆုံးဖြတ်လိုက်ပြီး
            </Typography>
            <Typography variant="body1" paragraph>
              ထိုစက်ဘီးအား ယူနင်း၍ ကန့်လန့်ကာကို ဖြတ်ပြီး ဇာတ်စင်ပေါ်သို တက် လိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဝါး ဟား ဟား .. ဟား ဟား&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ဟိုက် . . ဘာသံလဲမသိဘူး။ ပရိတ်သတ်ဘက် လှည့်ကြည့်လိုက်တော့ . .ဩော် ပရိတ်သတ်များ ရယ် တာပါကလား။ ကျွန်ုပ်
              ဝမ်းသာသွားသည်။ ကျွန်ုပ်ကို သဘောကျ၍ ရယ်ခြင်းပင်။ ကျွန်ုပ်စဉ်းစားသည်။ ကျွန်ုပ် ရုပ်ကဘဲ
              ရယ်စရာဖြစ်နေလိုလား၊ ဒါမှမဟုတ် ကျွန်ုပ်ခေါင်း ပေါ်က သျှောင်ထုံးကြောင့်လား၊ ဒသဝတ်ရုံကြောင့်လား၊
              ကျွန်ုပ်လက်ထဲက နံချပ်ကူကြောင့်လား၊ ကျွန်ုပ်စီးလာသော စက်ဘီးကြောင့်လား။ ဘာကြောင့်ပဲဖြစ်ဖြစ် ပရိတ်သတ် -
              အားပေးနေပြီပဲ။ ကျွန်ုပ် ဘဝင်နည်းနည်း မြင့်သွားပြီး ဇာတ်စင်ပေါ်တွင် စက်ဘီးအား နှစ်ပတ်စီးလိုက်ကာ
              ဇာတ်ခုံအလယ်တွင်ရပ်လိုက်ပြီး စက်ဘီးကို ဇာက်ခုံ ထောင့်သိုမှ၍ ဟန်ပါပါ လွှင့်ပစ်လိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              ဝုန်း..
            </Typography>
            <Typography variant="body1" paragraph>
              ပရိတ်သတ်ထဲမှ သားစက်ဘီး၊ သားစက်ဘီး ဟု ကလေးတစ်ယောက်အော်သံ ကြားရ၏။ ကျွန်ုပ်တစ်ချက် ဝှေ့ကြည့်လိုက်လျှင်
              ထိုကလေးမှာ ငြိမ်းကုပ်သွား၏။ စောစောက ရှယ်သံများ တိတ်ဆိတ်သွားပြန်၏။ ဒါကိုပဲ ကျွန်ုပ်သဘောကျမိ၏။
              ကျွန်ုပ်က ဒသလေ။ ကြမ်းရမယ် ရမ်းရမယ်မဟုတ်လား။
            </Typography>
          </ChapterContent>

          {/* Chapter 5 */}
          <ChapterContent 
            id="chapter5" 
            title="အချစ်"
            imageSrc="/images/love.jpg"
          >
            <Typography variant="body1" paragraph>
              ဇာတ်စင်ပေါ်တွင် ကျွန်ုပ်လှည့်ပတ်၍ ကြည့်မိသည်။ ကျွန်ုပ်၏ခေါင်းပေါ်တွင် သစ်ခွပန်းများကို ချိတ်ဆွဲထား၏။
              နှင်းဆီပန်းများကိုလည်း ကြိုးဖြင့်သီ၍ ချိတ်ထားသေး၏။ ပန်းရနံ့များလည်း သင်းထုံမွှေးပျံ့နေသည်။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်၏ရှေ့တည့်တည့်တွင် စားပွဲတစ်လုံး ချထား၏။ ထိုအပေါ်တွင်ကား ကျွန်ုပ်လက်တစ်ပြန်မက ကြီးမားသော
              လေးကြီးတစ်ခု။ လေး၏ဘေးတွင် မြှားသုံးစင်း၊ ဤလေးနှင့်မြှား၏ ရှေ့တည့်တည့်သို ကျော် ကြည့်လိုက်ရာ
              ဇာပဝါခန်းဆီးတစ်ခုကို တွေ့လိုက်ရသည်။ ဇာပဝါခန်းဆီးဆိုတော့ အတွင်းဘက်ကို ဖောက်မြင် နိုင်သည်။
              အတွင်းဘက်တွင်ကား...
            </Typography>
            <Typography variant="body1" paragraph>
              မယ်သီတာ . . . ။ ဩော် မယ်သီတာက မိုးဖြစ်နေ ပါကလား။ ဇာပဝါ ခန်းဆီးအတွင်းမှ ဝိုးတဝါးမြင်နေ
              ရသော သီတာဒေဝီသည် ကျွန်ုပ်ထံ ကျောင်းအုပ်ကြီးနှင့် လာစဉ်ကထက် အဆပေါင်းများစွာ ချောမွေ့လှပပေသည်
            </Typography>
            <Typography variant="body1" paragraph>
              ယင်းတခဏအချိန်တွင် ပရိတ်သတ်များ၊ ခုနက လှပပါသည်ဆိုသော သစ်ခွပန်းများနှင့် နှင်းဆီပန်းများသည်
              ကျွန်ုပ်၏စက္ခုအာရုံမှ ပျောက်သွားပြီး သီတာဒေဝီကိုသာ ထွန်းလင်းတောက်ပစွာ မြင်နေရသည်။
            </Typography>
          </ChapterContent>

          {/* Chapter 6 */}
          <ChapterContent 
            id="chapter6" 
            title="လေးတင်ခြင်း"
            imageSrc="/images/arrow.jpg"
            imageHeight={450}
          >
            <Typography variant="body1" paragraph>
              မိုး(သို့)သီတာသည် ကျွန်ုပ်ကို မြင် သွားသောအခါ အနားမှ ရံရွှေတော် တစ်ဦး၏လက်ကို ဖမ်းယူဆုပ်ကိုင်လိုက် လေသည်။
              သူမ၏ မျက်နှာမှာလည်း သရဲခြောက်ခံရသလို ဖြူရော်သွားသည်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;သူကြောက်ရွံ့ထိတ်လန့်သွား သလား&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ငါ့ရဲ့ရုပ်ဟာ မင်းအတွက် ဒီလောက်ပဲ ကြမ်းတမ်း နေသလား၊ ကိုယ်ဟာ ဗေလုဝလောက်တော့ အသွင်မဆိုး သေးပါဘူး&rdquo;
              ဟု ကျွန်ုပ်စိတ်တွင်းမှ ရေရွတ်မိသည်။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ် ဤစင်ပေါ်သို့ ရောက်လာခြင်းမှာ လေးတင် ရန် ရောက်လာခြင်းပင်။ ထို့ကြောင့် သီတာဆီမှ အကြည့် ခွာပြီး
              လေးတင်ရန် လေး၏ဗဟိုချက် ရွှေလက်ကိုင်ပေါ်သို့ လက်ကို တင်လိုက်သည်။ ရှိသမျှခွန်အားကိုညှစ်၍ လေးအား မ,လိုက်သည်။
              လေးမှာ ကြွမလာချေ။ နောက် တစ်ကြိမ် အံကို တင်းတင်းကြိတ်ပြီး
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ချစ်ခြင်းမေတ္တာအတွက်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ဟူ၍ စိတ်ထဲမှ ကြိမ်းဝါးပြီး မ,လိုက်ရာ လေးသည် ကျွန်ုပ်လက်ထဲ ကြွလျှက်ပါလာလေပြီ။ ကျွန်ုပ်မှာ ချွေးများ
              ရေချိုးထားသလိုဖြစ်နေသည်။ ဘောကန်တာပင် ဒီလောက် ချွေးမထွက်။
            </Typography>
            <Typography variant="body1" paragraph>
              နောက် လေးကြိုးကိုတပ်ရန် လေးကားထောက်ကာ ကြိုးကို မ,ယူပြီး သီတာအားကြည့်လိုက်မိသည်။ သီတာ၏ မျက်နှာမှာ
              သွေးဆုတ်နေပြီတကား။ ပြင်းစွာသော ထိတ် လန့်မှု၏ အရိပ်လက္ခဏာသည် သူမ၏မျက်လုံးတွင်
            </Typography>
            <Typography variant="body1" paragraph>
              အထင်းသားပေါ်နေ၏။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;သူ ငါအောင်မြင်မှာကို ကြောက်နေတယ်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်စိတ်ထဲမှ ရေရွတ်မိသည်။
            </Typography>
            <Typography variant="body1" paragraph>
              ပြင်းထန်စွာ နိမ့်ချည်မြင့်ချည် ဖြစ်နေသော ကျွန်ုပ်၏ ရင်ထဲရှိ မောပန်းမှုအပေါ်တွင် နှလုံးနာကျင်မှုများ
              ထပ်ဆင့်ဖြစ်ပေါ်လာသည်။ လက်ဖနောင့်ဆီမှ တသွင်သွင် စီးယိုလျှက်ရှိသော သွေး၏အနီရောင်သည် တစထက်တစ
              ကျယ်ပြန့်လာသည်။ ထိုအနီရောင်ထဲသို့ ကျွန်ုပ်ကြည့်လိုက် သောအခါ ကြောက်ရွံ့ထိတ်လန့်နေသော သီတာ၏ဖျော့
            </Typography>
            <Typography variant="body1" paragraph>
              တော့သည့် မျက်နှာပေါ်လာသည်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;သီတာဟာ . . ငါ့ကို ... &rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              မြင်ကွင်းတွင် အမှောင်တိုက်ဖြစ်ထွန်းသွားသည်။ လေးကြိုးသည် ကျွန်ုပ်လက်တွင်းမှ လွတ်ကျသွား၏။
              ကျွန်ုပ်၏နားထဲတွင်ကား
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;သူငါ့ကိုကြောက်ရွံ့နေတယ်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;သူ ငါအောင်မြင်မှာကို ထိတ်လန့်နေတယ်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ဟူသော အသံများသာ ပဲ့တင်၍နေတော့၏။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်၏ နှလုံးသည်းပွတ်သည် ခံတွင်းမှ နားတွင်းမှ မျက်စိတွင်းမှ တစ်စစီလွင့်ကျသွားတော့မည်ဟု ခံစားရသည်။
            </Typography>
          </ChapterContent>

          {/* Chapter 7 */}
          <ChapterContent 
            id="chapter7" 
            title="ချုပ်ငြိမ်းခြင်း"
            imageSrc="/images/end.jpg"
            imageHeight={250}
          >
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်စဉ်းစားမိသည်။ ချစ်သူ သီတာအား ကျွန်ုပ် မရလျှင် သင်္ချိုင်းကုန်းတွင် <strong>Beauty Saloon</strong>
              သွားဖွင့်သလို ဖြစ်နေမည်။ ထို့ကြောင့် <strong>ငါ့မြင်းငါစိုင်း စစ်ကိုင်းပဲ ရောက်ရောက်</strong>ဟု စိတ်ထဲမှ
              ပိုင်းဖြတ်လိုက်ပြီး ကျွန်ုပ်၏ နံချပ်ကူဖြင့် ရာမ၏စစ်တပ်ကို ထိုးဖောက်၍ သီတာအား ခိုးယူရန် မိုက်ရူးရဲဆန်စွာ
              ဆုံးဖြတ်ပြီး တိုက်ခိုက်တော့၏။
            </Typography>
            <Typography variant="body1" paragraph>
              အချိန်မည်မျှ ကြာသွားသည်မသိ။ ကျွန်ုပ်၏ နောက်ဘက်တွင် လူသေအလောင်းများ တောင်လိုပုံနေ၏။
              ဘယ်နေရာကြည့်ကြည့် နီစွေးစွေး အရောင်များကိုသာ မျက်စိတဆုံး မြင်တွေ့နေရ၏။ ကျွန်ုပ်မှာ အလွန်ပင် မော
              ဟိုက်နေ၏။ ချွေးများမှာလည်း သင်္ကြန်ရေပက်ထားသလို ရွှဲနစ်နေ၏။
            </Typography>
            <Typography variant="body1" paragraph>
              လူသေကောင်များမှ ကျွန်ုပ်၏အကြည့်ကိုခွာလိုက် ပြီး ရှေ့တည့်တည့်သို့ ကြည့်လိုက်ရာ ရာမနှင့် သီတာအား
              တွဲလျှက်မြင်လိုက်ရ၏။ ရာမက ကျွန်ုပ်အား မြှားနှင့်ချိန် ထားသေး၏။ ကျွန်ုပ်လည်း စိတ်ရိုင်းများ နိုးကြွ
              သောင်းကျန်းလာပြီး ကျွန်ုပ်၏ စစ်ရထားခေါ် စက်ဘီးအား ရာမရှိရာသို့ ဦးတည်လိုက်ပြီး အသားကုန်နှင်း၍
              နံချပ်ကူ ဖြင့်ပစ်ရန် အားယူလိုက်စဉ် ရာမထံမှ ရှီခနဲအသံတစ်သံ ကြားလိုက်ရ၏။ မြှားနှင့်ပစ်လိုက်ခြင်းပင်။
              ကျွန်ုပ်ကလည်း နံချပ်ကူဖြင့် ပစ်လိုက်၏။ ထိုအချိန် သီတာက ရာမ၏ရှေ့တွင်
            </Typography>
            <Typography variant="body1" paragraph>
              ကာရပ်လိုက်သည်။ ကျွန်ုပ်၏ရင် ထိတ်ခနဲဖြစ်သွား၏။ ဘာဖြစ်လိုလဲဆိုတော့ ကျွန်ုပ်ပစ်လိုက်သော နံချပ်ကူက သီတာကို
              ထိတော့မှာလေ။ ဒါကြောင့် ကျွန်ုပ်ခါးကြားထဲမှ ခြောက်လုံးပြူးဖြင့် နံချပ်ကူကို လမ်းကြောင်းလွဲသွားစေရန်
              ပစ်လိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်ပစ်လိုက်သော သေနတ်သံနှင့်အတူ ကျွန်ုပ်၏ နှလုံးတည့်တည့်သို ချွန်ထက်သော အရာတစ်ခု စောင့်တိုးသွားပြီး
              စစ်ရထားပေါ်မှ ကျွန်ုပ်၏ခန္ဓာကိုယ် ကြီးသည် လေထဲသို အတန်ကြာမြောက်တက်သွားပြီး မြေကြီးပေါ်သို
              အရှိန်ပြင်းစွာ ပြန်ကျလာ၏။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဝုန်း&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ် ပထမပစ်လိုက်သော နံချပ်ကူမှာ ချစ်သူ သီတာထံသို ပြေးဝင်ပြီး ထိလျှင် ချစ်သီတာ၏ဇီဝိန်ကြွေကျ
              သွားနိုင်ပေသည်။ သိုသော်လည်း ကျွန်ုပ် နောက်ထပ်ပစ် လိုက်သော ခြောက်လုံးပြူးကျည်ဆံက နံချပ်ကူအား ထိသွားပြီး
              လမ်းကြောင်းလွဲ၍ သီတာနံဘေးမှ ပွတ်ကာ သီကာ ထွက်သွားတော့၏။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ်လဲကျနေရာမှ လူးလဲ၍ထသော်လည်း မရပေ။ ကျွန်ုပ်၏ ဝဲဘက်ရင်အုံအား ကြည့်လိုက်သောအခါ သွေးများ
              မြင်မကောင်းအောင် ပန်းထွက်နေ၏။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ် ဇီဝိန်ချုပ်ငြိမ်းတော့မည်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;သီဟာ၊ ကိုယ်သေရတော့မယ်ဆိုတာ သိပေမဲ့ ကိုယ်ဝမ်းမနည်းပါဘူး။ ဘာဖြစ်လိုလဲဆိုတော့ ဒသဟာ မယ်သီတာကို
              အသက်ပေးပြီး ချစ်သွားတယ်ဆိုတာ မင်းမသိပေမဲ့ နှောင်းလူတွေကတော့ သိမှာပါ။ မင်းရဲ ရာမဟာ ဒသကိုသတ်လိုရပေမဲ့
              ဒသရဲ့အချစ်ကိုတော့ သတ်လိုမရပါဘူး။ ဒသရဲ့အချစ်ဟာ ဒီကမ္ဘာကြီး ရှိနေ သရွေ့ တည်မြဲနေမှာပါပဲ။ နှောင်းလူတွေရဲ့
              နှုတ်ဖျားမှာ တသသပြောနေရတော့မှာပါပဲ သီတာ&rdquo;။
            </Typography>
            <Typography variant="body1" paragraph>
              ထိုနောက် ကျွန်ုပ်၏ အမြင်အာရုံများ တဖြည်းဖြည်း ဝေဝါးလာပြီး ချစ်သူသီတာသည်လည်းကောင်း၊
              ရန်သူတော်ရာမသည်လည်းကောင်း၊ အလုံးစုံသောအရာ တိုသည်လည်းကောင်း ကျွန်ုပ်၏ အသိဉာဏ်အာရုံမှ တဖြည်းဖြည်း
              မှုန်ဝါးပျောက်ကွယ်သွားလေတော့၏။
            </Typography>
            <Typography variant="body1" paragraph>
              ဒသ၏ဘ၀ ချုပ်ငြိမ်းသွားချေပြီ . . . ။
            </Typography>
          </ChapterContent>

          {/* Chapter 8 */}
          <ChapterContent 
            id="chapter8" 
            title="မိုး၏အဖေ"
            imageSrc="/images/onion.jpg"
            imageHeight={250}
          >
            <Typography variant="body1" paragraph>
              အထက်ဖော်ပြပါ ကျောင်းကပွဲကနေစပြီး မိုးနဲ့ ကျွန်ုပ် ခင်သွားတယ်ဆိုပါတော့ဗျာ။ ခင်ပုံကလည်း နည်းနည်းတော့
              ဆန်းတယ်ဗျနော့။ ဒါပေမဲ့ အတော်လေး ခိုင်မြဲကြတယ်။ အဲလိုခင်ရာကနေ အတန်းထဲမှာ စကား
              ပြောဖော်တွေဖြစ်လာကြတယ်။ တိုတိုပြောကြဗျာ . . လူငယ်သဘာဝ ချစ်ကြိုက်သွားတယ်ပေါ့။ အိုးခြင်းထားလို
              အိုးခြင်းထိတာပဲဗျာ မဆန်းပါဘူး၊ ဒီလိုနဲ့ ကျောင်းထဲမှာ ကျွန်တော်တိုနှစ်ယောက် အတွဲဖြစ်သွားတယ်။ မနာလိုတဲ့
              ကျောင်းသားတချိုက <strong>မြင်မတော် ဆင်တော်နှင့် ခလောက်လို</strong> ကဲ့ရဲ့ကြပေမဲ့ ကျွန်တော်တိုနှစ်ယောက် ကတော့
              မသိချင်ယောင်ဆောင်နေကြတယ်။ ဒါနဲ့ နောက် ဆုံးစာမေးပွဲလည်း ဖြေပြီး နွေရာသီကျောင်းပိတ်ရက် တစ်ရက်မှာ
              သူက သူ့အဖေဆီကို လိုက်တွေ့ဖိုခေါ် တယ်. ပထမတော့ ကျွန်ုပ်ကငြင်းသေးတယ်ဗျ။ ဒါပေမဲ့ လိုက်တွေ့ဖို
              ပြောဖန်များတာနဲ့ သူ့ကိုအားနာပြီး လိုက်တွေ့ဖြစ်တယ်။
            </Typography>
            <Typography variant="body1" paragraph>
              သူ့အဖေက ပစ္စည်းလည်း တော်တော်ရှိတယ်။ ။ အပေါင်းအသင်းလဲ တော်တော်ကောင်းတယ်။ သူတို့အရပ်မှာ
              ဘုန်းကြီးလူထွက်လို နာမည်ကြီးတယ်။ ပုပ်ရင် ပေါ်၊ ဟုတ်ရင်ကျော်ပေါ့ဗျာ။ အဘိုးကြီးက မုဆိုးဖို၊ သံဃာ့
              ဘောင်ကနေ လူ့ဘောင်ပြောင်းလာတာဆိုတော့ စကား လည်းတတ်၊ ဗဟုသုတလည်းစုံပေါ့ဗျာ။ အဘိုးကြီးက
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ် ကိုမြင်တော့ တော်တော်စိတ်ဝင်စားသွားပုံပဲ။
            </Typography>
            <Typography variant="body1" paragraph>
              သူ့သမီးက ကျွန်ုပ်အကြောင်း ဘာတွေပြောထား လဲမသိဘူးဆိုပြီး ရင်တထိတ်ထိတ်နဲ့ပေါ့။ <strong>တရွာသွား သအားယုတ်၊
              တခြုံတိုး ပုဆိုးစုတ်</strong> ဆိုသလိုပေါ့။ သူ့သမီးက ပြောတယ်
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဒယ်ဒီဖားသားက ပိဋကတ်ကျမ်းတွေကိုထုံးလို မွှေ၊ ရေလိုနှောက်ခဲ့တာ မောင်ရဲ့&rdquo; တဲ့။
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ် မိုးတိုအိမ်ရောက်ပြီးလို မကြာခင် တစ်ညနေ မှာ ညစာစားအပြီး ကျွန်ုပ်ရယ်၊ မိုးအဖေရယ် အချိုပွဲလေး
              စားပြီး စကားထိုင်ပြောနေကြတယ်ဗျ။ အဲဒီမှာ ဗြုန်းဆို အဘိုးကြီးက ဆိုင်းမဆင့် ဗုံမပါဘဲ
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;မောင်ရင် . . . အဲမောင်ရင်လိုပဲ မောင်ရင့်အနေနဲ့ ဦးသမီးကို ဘယ်လိုမြင်လဲ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              တဲ့တိုးကြီး မေးတယ်ဗျ။ ပြီးတော့ သူက
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ငါ့ရှေ့မှာမိုလို မြှောက်ပင့်တဲ့စကားတွေ ပြောစရာ မလိုဘူး။ မင်းအမြင်အတိုင်းပဲပြော၊ ဦးက နစ္စ၊ ဂီတ၊ဝါ
              ဒိတပဲ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ကျွန်ုပ် စဉ်းစားတယ်။ အင်း . . ငါ့ကိုတော့ အဘိုးကြီး ပညာပြနေပြီ။ ငါ လဲ ပညာပြဦးမှဟု စဉ်စား
              လိုက်ပြီး . . .
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဣတိပိသော၊ ဘဂဝါပေါ့ ဦး&rdquo; လို ပြောလိုက်ကာ သူကဘာကိုသဘောကျလဲမသိဘူး တဟားဟားနဲ့ရယ်ပြီး
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဟုတ်ပြီဟေ့၊ ဦးက အဲဒါမျိုးမှ ကြိုက်တာကွဲ၊ ပညာရှင်ချင်း တွေ့ပြီပေါ့ကွာ ဟား ဟား ဟား
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;အရဟံ ပေါ့ ဦးရယ်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဟိုက် ဝိဇ္ဇာစရဏ သမ္ပန္နော ပါလား မောင်ရင်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;သုဂတော ကို သုံးပေါ့ဦး&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဟာ ဦးက ဗုဒ္ဓေါပဲ သုံးချင်တာ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဦးသမီးက ဘဂဝါ လို ထင်တာပဲ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ထိုသို ကျွန်ုပ်တိုနှစ်ယောက် ပါဠိစကားများ ပြောလာရာ ကျွန်ုပ်တိုသိသော ပါဠိများ ကုန်သလောက် ရှိလျှင်
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ကဲ . . . မောင်ရင် ဦးသိသမျှ ပါဠိတွေတော့ ကုန်ပြီ . . မောင်ရင်ကော&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;မှန်တာပြောရရင် ကျွန်တော်လည်း ကုန်ပြီဗျ&rdquo; = ဒီမှာ အဘိုးကြီးက လေသံလေးနဲ့ ကျွန်တော့် နားနားကပ်
              ပြောတယ်
            </Typography>
            <Typography variant="body1" paragraph>
              မောင်ရင်နဲ့ဦး ဒီအတိုင်းဆက်သွားလို ကတော့ ဦးသမီးလာလိုတွေ့ခဲ့ရင် ဦးတိုနှစ်ယောက်လုံး * အရှက်ကွဲဖွယ်ရှိလိမ့်မယ်။
              ဒီတော့ ပါဠိလိုမပြောနဲ့တော့၊ ဘိုလိုမှုတ်ကြမယ်&rdquo; ဟု အဘိုးကြီးက တိုင်ပင်၏
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;Yes! that right :&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;A little ပေါ့ကွာ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              Many ပါတယ်ဦးရာ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;The dog is bark လိုပေါ့ မောင်ရင်ရာ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ခွေးဘယ်လောက်ပဲဟောင်ပါစေ ကုလားကို ဝက်သား eat ခိုင်းလို မရပါဘူးဦးရာ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;Blue mountain ရေသန့်က ပိုမကောင်းဘူးလား မောင်ရင်&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;Alpine က more ပါတယ်ဗျာ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဟာ . . မင်းကလဲကွာ မိုးယုစံက ever ဖြစ်တာ မဟုတ်လား&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဝတ်မှုန်ရွှေရည်ကိုဘယ်မှီမလဲ&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              စသည်ဖြင့် ကျွန်ုပ်တိုနှစ်ယောက် စကားနိုင်လုကြ၍ မောလာသောအခါ ကျွန်ုပ်က အမောပြေစေရန် အဘိုးကြီး အား
              စလိုက်သည်။
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;အပန်းဖြေစခန်းမှာ Night Club m အကောင်းဆုံးမဟုတ်လား&rdquo;
            </Typography>
            <Typography variant="body1" paragraph>
              ဒီမှာတင် အဘိုးကြီးက စိတ်ဆိုးမာန်ဆိုးနဲ့ ကျွန်ုပ်ကို ပြောတယ်။ သူပြောလိုက်တဲ့စကားကြောင့် ကျွန်ုပ် အံ့ဩ သွားရ၏။
              သူပြောလိုက်သည်မှာ
            </Typography>
            <Typography variant="body1" paragraph>
              &ldquo;ဟာ .. မင်းကလဲ လူငယ်ဖြစ်ပြီး ဒါလေးတောင် မသိဘူးလား။ KTV က သာတာပေါ့တွာ&rdquo; တဲ့၊
            </Typography>
            <Typography variant="body1" paragraph>
              သူပြောတဲ့စကားကို ကြားကြားပြီးခြင်း ကျွန်ုပ် မှတ်ချက်တစ်ခုချမိ၏။
            </Typography>
            <Typography variant="body1" paragraph>
              ဪ - • ရှေးလူကြီးတွေပြောခဲ့တဲ့၊ ကြီးသူပြော တဲ့စကား မပယ်ရှားရဘူးဆိုတာ အမှန်ပါကလားဟူ၍။
            </Typography>
            <Typography variant="body1" paragraph>
              အဲလိုနဲ့ အဖိုးကြီးနဲ့ကျွန်ုပ် ခင်မင်သွားကြတယ်။ အဘိုးကြီးက သူ့သမီးနဲ့ကျွန်ုပ်ကို သဘောတူတယ်လိုလဲ ပြောလိုက်ရော
              ကျွန်ုပ်ဝမ်းသာလိုက်တဲ့ဖြစ်ခြင်း။ ဘယ်ပြော ကောင်းမလဲဗျာ။ <strong>တစ်နှစ်လုံးလုံး အစာငတ်နေတဲ့ခွေး
              ချေးပုံတွေ့သလိုပေါ့</strong>။ <strong>ဆင်ဖြူတော်ပြုတ်စားချင်နေတာ တာ ကြာပြီ။ ဒါပေမဲ့ အိုးမရှိလိုခက်နေတာကနေ
              ခုအိုးတွေ့လို ဝမ်းသာတဲ့ပုံမျိုးပေါ့။</strong>
            </Typography>
            <Typography variant="body1" paragraph>
              ဒါပေမဲ့ အဲဒီပျော်ရွှင်မှုလေးကို ကျွန်ုပ်ကြာကြာ မခံစားလိုက်ရပါဘူး။ မိုးတိုအိမ်ကအပြန် နှစ်ရက်လောက် အကြာမှာ
              သူ့ဆီက ဖြတ်စာရောက်လာတာပါပဲ။ စာရှုသူ များကို ရှေ့ခန်းမှာဖော်ပြခဲ့တဲ့စာပေါ့။ <strong>တစ်တက်စားလဲ ကြက်သွန်၊
              နှစ်တက်စားလဲ ကြက်သွန် ဆိုပေမဲ့ ကျွန်ုပ် တစ်တက်မှ မစားခဲ့ပါဘူး။</strong>
            </Typography>
          </ChapterContent>

          {/* Chapter 9 */}
          <Box id="chapter9" sx={{ mb: 8 }}>
            <Typography variant="h4" fontWeight={500} gutterBottom sx={{ mb: 3 }}>
              ကျွန်ုပ်၏စာ
            </Typography>
            <Typography variant="body1" paragraph>
              မိုးက ကျွန်ုပ်ကို မချစ်နိုင်တော့ပေမဲ့ ကျွန်ုပ်ကတော့ မိုးကို မေ့လိုမရပါဘူး။ အဲဒါကြောင့် ကျွန်ုပ် မိုးကိုချစ်နေဆဲ
              ဆိုတဲ့အကြောင်း ဤမှတ်တမ်းမှ စာပါးလိုက်ချင်ရဲ့။ အကယ်၍ စာရှုသူများ မိုးနှင့်တွေ့ဆုံခဲ့ပါက ဤမှတ်တမ်း ကို
              သူ့အားပေးလိုက်ပါရန် မေတ္တာရပ်ခံပါ၏။
            </Typography>
            <HandwrittenLetter />
            <Box sx={{ position: 'relative', width: '100%', height: { xs: 180, sm: 220, md: 250 }, my: 4, maxWidth: 500, mx: 'auto' }}>
              <NextImage
                src="/images/fish.jpg"
                alt="ကျွန်ုပ်၏စာ"
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 600px) 100vw, 500px"
              />
            </Box>
          </Box>

          <EpilogueSection />

          <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 8, mb: 4 }}>
            © {new Date().getFullYear()} Chit Thae
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}