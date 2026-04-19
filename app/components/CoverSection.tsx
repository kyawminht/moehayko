'use client';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export default function CoverSection() {
  return (
    <Box id="cover" sx={{ textAlign: 'center', mb: 8 }}>
      <Box 
        sx={{ 
          position: 'relative', 
          width: '100%', 
          maxWidth: { xs: 300, sm: 350, md: 400 }, 
          height: { xs: 450, sm: 525, md: 600 }, 
          mx: 'auto', 
          mb: 3 
        }}
      >
        <Image
          src="/images/Cover.jpg"
          alt="Cover"
          fill
          style={{ objectFit: 'contain' }}
          priority
          sizes="(max-width: 600px) 300px, (max-width: 900px) 350px, 400px"
        />
      </Box>
      <Typography variant="h4" fontWeight={500} gutterBottom>
        Chit Thae
      </Typography>
    </Box>
  );
}