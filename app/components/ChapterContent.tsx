'use client';

import { Box, Typography, Divider } from '@mui/material';
import Image from 'next/image';

interface ChapterContentProps {
  id: string;
  title: string;
  children: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageHeight?: number;
}

export default function ChapterContent({ 
  id, 
  title, 
  children, 
  imageSrc, 
  imageAlt = 'Illustration',
  imageHeight = 300 
}: ChapterContentProps) {
  return (
    <Box id={id} sx={{ mb: 8 }}>
      <Typography variant="h4" fontWeight={500} gutterBottom sx={{ mb: 3 }}>
        {title}
      </Typography>
      
      {imageSrc && (
        <Box 
          sx={{ 
            position: 'relative', 
            width: '100%', 
            height: { xs: imageHeight * 0.7, sm: imageHeight * 0.85, md: imageHeight }, 
            my: 4,
            mx: 'auto',
            maxWidth: 600,
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            style={{ objectFit: 'contain' }}
            sizes="(max-width: 600px) 100vw, 600px"
          />
        </Box>
      )}
      
      {children}
    </Box>
  );
}