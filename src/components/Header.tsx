import React, { useState } from 'react';
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  Avatar,
  useTheme,
  Menu,
  MenuItem,
  Button,
  Paper,
  Fade,
  Drawer,
  ListItemIcon,
  Collapse,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { styled } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArticleIcon from '@mui/icons-material/Article';
import BusinessIcon from '@mui/icons-material/Business';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import GroupsIcon from '@mui/icons-material/Groups';
import MapIcon from '@mui/icons-material/Map';

const drawerWidth = 280;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
    background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
    backdropFilter: 'blur(10px)',
    borderRight: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    overflowX: 'hidden',
  },
}));

const GlowingLogo = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  position: 'relative',
  cursor: 'pointer',
  padding: '12px',
  borderRadius: '16px',
  background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255,255,255,0.2)',
  transition: 'all 0.3s ease',
  '&::before': {
    content: '""',
    position: 'absolute',
    inset: '-2px',
    borderRadius: '18px',
    padding: '3px',
    background: 'linear-gradient(45deg, #00ff88, #00a3ff, #ff0055)',
    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
    WebkitMaskComposite: 'xor',
    maskComposite: 'exclude',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  '&:hover': {
    transform: 'translateY(-2px)',
    '&::before': {
      opacity: 1,
    },
    '& .logo-text': {
      background: 'linear-gradient(45deg, #00ff88, #00a3ff, #ff0055)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textShadow: '0 0 20px rgba(255,255,255,0.5)',
    },
    '& .logo-image': {
      transform: 'scale(1.05) rotate(5deg)',
      filter: 'drop-shadow(0 0 8px rgba(255,255,255,0.8))',
    }
  }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    background: '#81C784',
    boxShadow: '0 0 10px rgba(76, 175, 80, 0.5)',
  },
}));

const LogoText = styled('div')({
  fontSize: '1.8rem',
  fontWeight: 900,
  color: '#fff',
  padding: '0.15em 0.4em',
  background: 'linear-gradient(45deg, #4CAF50, #81C784)',
  borderRadius: '6px',
  boxShadow: '0 0 15px rgba(76, 175, 80, 0.4)',
  fontFamily: "'Orbitron', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  letterSpacing: '1px',
  transform: 'perspective(500px) rotateX(10deg)',
  transformStyle: 'preserve-3d',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: -50,
    width: '50%',
    height: '100%',
    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.4), transparent)',
    transform: 'skewX(-25deg)',
    animation: 'shine 2s infinite',
    filter: 'blur(3px)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
    animation: 'pulse 2s infinite',
  },
  '@keyframes shine': {
    '0%': { left: '-50%' },
    '100%': { left: '150%' },
  },
  '@keyframes pulse': {
    '0%, 100%': { opacity: 0.5 },
    '50%': { opacity: 0.8 },
  }
});

const menuItems = {
  communication: {
    label: 'Communication',
    color: '#FF4081',
    icon: <ArticleIcon />,
    submenu: [
      { label: 'Actualités', path: '/articles' },
      { label: 'Communication', path: '/communication' }
    ]
  },
  dirigeant: {
    label: 'Le Dirigeant',
    color: '#7C4DFF',
    icon: <BusinessIcon />,
    submenu: [
      { label: 'Actions syndicales', path: '/actions-syndicales' },
      { label: 'Mandats FNA', path: '/mandats-fna' },
      { label: 'Vie Fédérale', path: '/vie-federale' }
    ]
  },
  expertise: {
    label: 'Expertise',
    color: '#00BCD4',
    icon: <GroupsIcon />,
    submenu: [
      { label: "L'entreprise", path: '/expertise/entreprise' },
      { label: 'Juridique et Fiscal', path: '/expertise/juridique-fiscal' }
    ]
  },
  metier: {
    label: 'Le Métier',
    color: '#4CAF50',
    icon: <AgricultureIcon />,
    submenu: [
      { label: 'Infrastructure et logistique', path: '/metier/infrastructure' },
      { label: 'Développement durable', path: '/metier/developpement-durable' },
      { label: "Distribution d'intrants", path: '/metier/distribution' },
      { label: 'Le Grain', path: '/metier/grain' },
      { label: 'Politiques agricoles', path: '/metier/politiques' }
    ]
  },
  regions: {
    label: 'Nos régions',
    color: '#FFC107',
    icon: <MapIcon />,
    submenu: [
      { label: 'NCE', path: '/regions/nce' },
      { label: 'NNE', path: '/regions/nne' },
      { label: 'NPM', path: '/regions/npm' },
      { label: 'NO', path: '/regions/no' }
    ]
  }
};

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleProfileClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuClick = (menuKey: string) => {
    setActiveMenu(activeMenu === menuKey ? null : menuKey);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <StyledDrawer variant="permanent">
      <Toolbar sx={{ minHeight: { xs: 64, md: 70 }, px: 2 }}>
        <GlowingLogo
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.95]
          }}
          onClick={handleLogoClick}
          sx={{
            p: 1,
            transform: 'scale(0.9)'
          }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2
            }}
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              transition: { duration: 0.3 }
            }}
          >
            <LogoText>
              FNA
            </LogoText>
          </motion.div>
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.4
            }}
          >
            <Typography
              variant="subtitle1"
              className="logo-text"
              sx={{
                fontWeight: 700,
                color: 'white',
                letterSpacing: '1.5px',
                fontFamily: "'Orbitron', sans-serif",
                textShadow: '0 0 8px rgba(255,255,255,0.3)',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                fontSize: '0.9rem',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -2,
                  left: 0,
                  width: '100%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)',
                  transform: 'scaleX(0)',
                  transformOrigin: 'center',
                  transition: 'transform 0.3s ease',
                },
                '&:hover::after': {
                  transform: 'scaleX(1)',
                }
              }}
            >
              <Box
                component={motion.span}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.3 }}
                sx={{
                  background: 'linear-gradient(45deg, #00ff88, #00a3ff)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  padding: '0 4px',
                }}
              >
                EXTRANET
              </Box>
            </Typography>
          </motion.div>
        </GlowingLogo>
      </Toolbar>

      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: 0.5,
        p: 2,
        overflowY: 'auto',
      }}>
        {Object.entries(menuItems).map(([key, item]) => (
          <Box key={key}>
            <Button
              fullWidth
              onClick={() => handleMenuClick(key)}
              startIcon={React.cloneElement(item.icon, { style: { color: item.color } })}
              sx={{
                color: 'white',
                px: 2,
                py: 1.5,
                fontSize: '1rem',
                justifyContent: 'flex-start',
                fontFamily: "'Quicksand', sans-serif",
                fontWeight: 600,
                position: 'relative',
                background: activeMenu === key ? `linear-gradient(90deg, ${item.color}33 0%, transparent 100%)` : 'transparent',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '4px',
                  height: activeMenu === key ? '80%' : '0%',
                  background: item.color,
                  transition: 'all 0.3s ease',
                  boxShadow: activeMenu === key ? `0 0 10px ${item.color}` : 'none',
                },
                '&:hover': {
                  background: `linear-gradient(90deg, ${item.color}33 0%, transparent 100%)`,
                  '&::before': {
                    height: '80%',
                  }
                }
              }}
            >
              {item.label}
            </Button>
            <Collapse in={activeMenu === key}>
              <Box
                sx={{
                  ml: 4,
                  mt: 1,
                  mb: 1,
                  borderLeft: `2px solid ${item.color}33`,
                }}
              >
                <AnimatePresence>
                  {item.submenu?.map((subItem, index) => (
                    <motion.div
                      key={subItem.path}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                    >
                      <Button
                        fullWidth
                        onClick={() => handleNavigate(subItem.path)}
                        sx={{
                          color: 'white',
                          opacity: 0.8,
                          py: 1,
                          px: 2,
                          justifyContent: 'flex-start',
                          fontFamily: "'Quicksand', sans-serif",
                          fontSize: '0.95rem',
                          position: 'relative',
                          overflow: 'hidden',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: 0,
                            top: '50%',
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            background: item.color,
                            transform: 'translateY(-50%)',
                            transition: 'all 0.3s ease',
                            boxShadow: `0 0 10px ${item.color}`,
                          },
                          '&:hover': {
                            opacity: 1,
                            background: `linear-gradient(90deg, ${item.color}22 0%, transparent 100%)`,
                            '&::before': {
                              transform: 'translateY(-50%) scale(1.5)',
                              boxShadow: `0 0 20px ${item.color}`,
                            }
                          }
                        }}
                      >
                        {subItem.label}
                      </Button>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </Box>
            </Collapse>
          </Box>
        ))}
      </Box>

      <Box sx={{ 
        mt: 'auto', 
        p: 2, 
        display: 'flex', 
        justifyContent: 'space-between',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconButton 
            color="inherit"
            sx={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            <StyledBadge badgeContent={4} color="error">
              <NotificationsIcon />
            </StyledBadge>
          </IconButton>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <IconButton
            onClick={handleProfileClick}
            sx={{
              padding: 0.5,
              border: '2px solid rgba(255, 255, 255, 0.2)',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              transition: 'all 0.3s ease',
              '&:hover': {
                border: '2px solid rgba(255, 255, 255, 0.4)',
                background: 'rgba(255, 255, 255, 0.2)',
              }
            }}
          >
            <Avatar
              src="/avatar.jpg"
              sx={{
                width: 32,
                height: 32,
              }}
            />
          </IconButton>
        </motion.div>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            sx: {
              background: 'rgba(46, 125, 50, 0.95)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 30px rgba(0, 0, 0, 0.3)',
              color: 'white',
              '& .MuiMenuItem-root': {
                fontFamily: "'Quicksand', sans-serif",
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                }
              }
            }
          }}
        >
          <MenuItem onClick={() => { handleClose(); navigate('/profile'); }}>Mon Profil</MenuItem>
          <MenuItem onClick={() => { handleClose(); navigate('/settings'); }}>Paramètres</MenuItem>
          <MenuItem onClick={() => { handleClose(); navigate('/logout'); }}>Déconnexion</MenuItem>
        </Menu>
      </Box>
    </StyledDrawer>
  );
};

export default Header;