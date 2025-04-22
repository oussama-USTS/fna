import React from 'react';
import {
  Box,
  Container,
  Typography,
  useTheme,
  GlobalStyles,
  Grid,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import Articles from '../components/Articles';
import Organigramme from './Organigramme';
import Calendar from '../components/Calendar';
import Hero from '../components/Hero';

const Home = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      <Hero />

      {/* Reste des sections */}
      <Box 
        sx={{ 
          width: '100%',
          bgcolor: 'background.default',
        }}
      >
        <Articles />
        <Organigramme />
        <Calendar />
      </Box>
    </Box>
  );
};

export default Home; 