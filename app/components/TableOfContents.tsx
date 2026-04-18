'use client';

import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import Image from 'next/image';

export default function TableOfContents() {
  return (
    <Box id="toc" sx={{ mb: 8 }}>
      <Typography variant="h4" fontWeight={500} gutterBottom sx={{ mb: 3 }}>
        မာတိကာ
      </Typography>
      <List sx={{ mb: 3 }}>
        <ListItem><ListItemText primary="- မိုး၏ဖြတ်စာ" /></ListItem>
        <ListItem><ListItemText primary="- တွေ့ဆုံရင်ခုန်ခြင်း" /></ListItem>
        <ListItem><ListItemText primary="- နံချပ်ကူ" /></ListItem>
        <ListItem><ListItemText primary="- စစ်ရထား" /></ListItem>
        <ListItem><ListItemText primary="- အချစ်" /></ListItem>
        <ListItem><ListItemText primary="- လေးတင်ခြင်း" /></ListItem>
        <ListItem><ListItemText primary="- ချုပ်ငြိမ်းခြင်း" /></ListItem>
        <ListItem><ListItemText primary="- မိုး၏အဖေ" /></ListItem>
        <ListItem><ListItemText primary="- ကျွန်ုပ်၏စာလွှာ" /></ListItem>
      </List>
      <Divider />
      <Typography variant="body1" align="center" sx={{ my: 2 }}>
        ဖတ်လိုသောအခန်းအားဖွင့်ဖတ် ဒတ်ခနဲတိုးစေမည်
      </Typography>
      <Divider />
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        ပန်းချီ - ဗကပ၏နောက်ဆုံးမျိုးဆက် ဘလဆပြည့်စုံ
      </Typography>
      
      <Box sx={{ position: 'relative', width: '100%', maxWidth: 400, height: 200, mx: 'auto', mt: 4 }}>
        <Image
          src="/images/letter.jpg"
          alt="Illustration"
          fill
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 600px) 100vw, 400px"
        />
      </Box>
    </Box>
  );
}