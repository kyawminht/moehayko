'use client';

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material';
import { chapters } from '../data/chapters';

interface SidebarProps {
  activeChapter: string;
  onChapterClick: (id: string) => void;
  variant: 'permanent' | 'temporary';
  open?: boolean;
  onClose?: () => void;
  drawerWidth: number;
}

export default function Sidebar({
  activeChapter,
  onChapterClick,
  variant,
  open,
  onClose,
  drawerWidth,
}: SidebarProps) {
  const content = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ p: { xs: 2, sm: 2.5 }, borderBottom: 1, borderColor: 'divider' }}>
        <Typography variant="h6" fontWeight={500} sx={{ letterSpacing: '-0.01em' }}>
          ချစ်သဲ
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Chit Thae
        </Typography>
      </Box>
      <List sx={{ flex: 1, overflowY: 'auto', p: { xs: 1, sm: 1.5 } }}>
        {chapters.map((chapter) => (
          <ListItem key={chapter.id} disablePadding>
            <ListItemButton
              selected={activeChapter === chapter.id}
              onClick={() => onChapterClick(chapter.id)}
              sx={{
                borderRadius: 1,
                mb: 0.25,
                py: { xs: 1.2, sm: 1 },
                '&.Mui-selected': {
                  bgcolor: '#f0f0f0',
                  '&:hover': {
                    bgcolor: '#e8e8e8',
                  },
                },
                '&:hover': {
                  bgcolor: '#f5f5f5',
                },
              }}
            >
              <ListItemText 
                primary={chapter.title} 
                primaryTypographyProps={{
                  fontSize: { xs: '1rem', sm: '0.95rem' },
                  fontWeight: activeChapter === chapter.id ? 500 : 400,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  // For temporary (mobile) drawer
  if (variant === 'temporary') {
    return (
      <Drawer
        variant="temporary"
        open={open}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            maxWidth: '85%',
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  // For permanent (desktop) drawer
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid',
          borderColor: 'divider',
        },
      }}
      open
    >
      {content}
    </Drawer>
  );
}