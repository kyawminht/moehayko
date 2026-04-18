'use client';

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

interface MobileHeaderProps {
  onMenuClick: () => void;
  drawerWidth: number;
}

export default function MobileHeader({ onMenuClick, drawerWidth }: MobileHeaderProps) {
  return (
    <AppBar
      position="fixed"
      color="default"
      elevation={0}
      sx={{
        width: { md: `calc(100% - ${drawerWidth}px)` },
        ml: { md: `${drawerWidth}px` },
        display: { md: 'none' },
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: '#ffffff',
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap fontWeight={500}>
          ချစ်သဲ
        </Typography>
      </Toolbar>
    </AppBar>
  );
}