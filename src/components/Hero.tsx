import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Image de fond */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
        }}
      >
        <Box
          component="img"
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=100"
          alt="Négoce agricole"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7))',
            zIndex: 1,
          }}
        />
      </Box>

      {/* Contenu */}
      <Container 
        maxWidth="lg"
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Box
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          sx={{ 
            color: 'white',
            textAlign: 'center',
            width: '100%',
            maxWidth: '1200px',
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <motion.div variants={itemVariants}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                mb: 2,
                textTransform: 'none',
                lineHeight: 1.2,
              }}
            >
              La Fédération du
              <br />
              <Box
                component="span"
                sx={{
                  color: '#4CAF50',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                }}
              >
                Négoce Agricole
              </Box>
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                maxWidth: '800px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.5rem' },
                fontWeight: 400,
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Acteur majeur de la filière agricole française,
              <br />
              nous accompagnons la transition vers une agriculture durable et performante.
            </Typography>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: '#4CAF50',
                px: { xs: 3, sm: 4, md: 6 },
                py: { xs: 1.5, sm: 2 },
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '50px',
                '&:hover': {
                  backgroundColor: '#388E3C',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 6px 20px rgba(76, 175, 80, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Découvrir nos actions
            </Button>
          </motion.div>
        </Box>
      </Container>

      {/* Indicateur de défilement */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          zIndex: 2,
        }}
      >
        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center',
            fontSize: '1.1rem',
            fontWeight: 500,
            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
          }}
        >
          Scroll pour découvrir
        </Typography>
        <Box
          sx={{
            width: 2,
            height: 60,
            backgroundColor: 'white',
            margin: '10px auto',
            boxShadow: '0 0 10px rgba(255,255,255,0.5)',
          }}
        />
      </Box>
    </Box>
  );
};

export default Hero; 