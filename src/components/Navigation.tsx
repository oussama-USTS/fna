import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = ['Accueil', 'Communication', 'Expertise', 'Le Métier', 'Nos régions'];

  const MotionButton = motion(Button);

  return (
    <>
      <AppBar position="fixed" color="transparent" sx={{ backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'primary.main' }}>
              FNA Extranet
            </Typography>
          </motion.div>
          
          {!isMobile ? (
            <Box sx={{ marginLeft: 'auto', display: 'flex', gap: 2 }}>
              {menuItems.map((item, index) => (
                <MotionButton
                  key={item}
                  color="primary"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </MotionButton>
              ))}
            </Box>
          ) : (
            <IconButton
              color="primary"
              edge="end"
              onClick={() => setMobileOpen(true)}
              sx={{ marginLeft: 'auto' }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => setMobileOpen(false)}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Toolbar /> {/* Spacer */}
    </>
  );
};

export default Navigation; 