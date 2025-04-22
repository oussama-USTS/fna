import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import NatureIcon from '@mui/icons-material/Nature';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const features = [
  {
    icon: <AgricultureIcon sx={{ fontSize: 40 }} />,
    title: 'Innovation Agricole',
    description: 'Développement de solutions innovantes pour une agriculture moderne et efficace.',
  },
  {
    icon: <NatureIcon sx={{ fontSize: 40 }} />,
    title: 'Développement Durable',
    description: "Engagement fort pour une agriculture respectueuse de l'environnement.",
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40 }} />,
    title: 'Réseau d\'Experts',
    description: 'Une communauté de professionnels dédiés au secteur agricole.',
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
    title: 'Performance Économique',
    description: 'Optimisation des ressources et croissance durable du secteur.',
  },
];

const Features = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Box
      sx={{
        py: 12,
        backgroundColor: '#f5f5f5',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h2"
              align="center"
              sx={{
                mb: 8,
                fontWeight: 700,
                color: '#2E7D32',
              }}
            >
              Nos Engagements
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <motion.div variants={itemVariants}>
                  <Box
                    component={motion.div}
                    whileHover={{
                      scale: 1.05,
                    }}
                    sx={{
                      height: '100%',
                    }}
                  >
                    <Paper
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: 4,
                        transition: 'all 0.3s ease',
                        backgroundColor: 'white',
                        '&:hover': {
                          boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                        },
                      }}
                    >
                      <Box
                        sx={{
                          mb: 2,
                          color: '#4CAF50',
                          transform: 'translateZ(0)',
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ flexGrow: 1 }}
                      >
                        {feature.description}
                      </Typography>
                    </Paper>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>

      {/* Background decoration */}
      <Box
        component={motion.div}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        sx={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(76,175,80,0.1) 0%, rgba(76,175,80,0) 70%)',
          top: '-300px',
          right: '-300px',
          zIndex: 0,
        }}
      />
    </Box>
  );
};

export default Features; 