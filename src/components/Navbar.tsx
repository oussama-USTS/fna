import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BusinessIcon from '@mui/icons-material/Business';
import GavelIcon from '@mui/icons-material/Gavel';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const menuItems = [
  { title: 'Accueil', path: '/', icon: <HomeIcon /> },
  { title: 'Organigramme', path: '/organigramme', icon: <GroupsIcon /> },
  { title: 'Articles', path: '/articles', icon: <ArticleIcon /> },
  { title: 'Calendrier', path: '/calendrier', icon: <CalendarMonthIcon /> },
];

const subMenuItems = {
  'Actions syndicales': [
    { title: 'Mandats FNA', path: '/mandats-fna' },
    { title: 'Vie Fédérale', path: '/vie-federale' },
  ],
  'Expertise': [
    { title: "L'entreprise", path: '/entreprise' },
    { title: 'Juridique et Fiscal', path: '/juridique-fiscal' },
  ],
  'Le Métier': [
    { title: 'Infrastructure et logistique', path: '/infrastructure' },
    { title: 'Développement durable', path: '/developpement-durable' },
    { title: "Distribution d'intrants", path: '/distribution' },
    { title: 'Le Grain', path: '/grain' },
    { title: 'Politiques agricoles', path: '/politiques-agricoles' },
  ],
  'Nos régions': [
    { title: 'NCE', path: '/region-nce' },
    { title: 'NNE', path: '/region-nne' },
    { title: 'NPM', path: '/region-npm' },
    { title: 'NO', path: '/region-no' },
  ],
};

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSubMenuClick = (category: string) => {
    setOpenSubMenus((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const drawer = (
    <Box sx={{ width: 280 }}>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.path}
            onClick={() => {
              navigate(item.path);
              setMobileOpen(false);
            }}
          >
            <ListItemIcon sx={{ color: 'primary.main' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.title} />
          </ListItem>
        ))}

        {Object.entries(subMenuItems).map(([category, items]) => (
          <React.Fragment key={category}>
            <ListItem button onClick={() => handleSubMenuClick(category)}>
              <ListItemIcon sx={{ color: 'primary.main' }}>
                {category === 'Actions syndicales' && <GavelIcon />}
                {category === 'Expertise' && <BusinessIcon />}
                {category === 'Le Métier' && <AgricultureIcon />}
                {category === 'Nos régions' && <BusinessIcon />}
              </ListItemIcon>
              <ListItemText primary={category} />
              {openSubMenus[category] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSubMenus[category]} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {items.map((subItem) => (
                  <ListItem
                    button
                    key={subItem.path}
                    sx={{ pl: 4 }}
                    onClick={() => {
                      navigate(subItem.path);
                      setMobileOpen(false);
                    }}
                  >
                    <ListItemText primary={subItem.title} />
                  </ListItem>
                ))}
              </List>
            </Collapse>
          </React.Fragment>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar 
      position="sticky" 
      sx={{ 
        backgroundColor: 'background.paper',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton
            color="primary"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: 'none', md: 'flex' },
                color: 'primary.main',
                fontWeight: 700,
                cursor: 'pointer',
              }}
              onClick={() => navigate('/')}
            >
              FNA
            </Typography>
          </motion.div>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 4 }}>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                onClick={() => navigate(item.path)}
                sx={{
                  mx: 1,
                  color: 'text.primary',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                  '&:hover': {
                    backgroundColor: 'primary.light',
                    color: 'primary.main',
                  },
                }}
              >
                {item.icon}
                {item.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      <Drawer
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 280 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Navbar; 