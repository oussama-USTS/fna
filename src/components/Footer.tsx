import React from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1a237e',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* À propos */}
          <Grid component="div" item xs={12} md={4}>
            <motion.div {...fadeInUp}>
              <Typography variant="h6" gutterBottom>
                La FNA
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                La Fédération du Négoce Agricole représente les entreprises de négoce agricole en France,
                un maillon essentiel entre les producteurs et les marchés.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton
                  component={Link}
                  href="https://www.linkedin.com"
                  target="_blank"
                  sx={{ color: 'white' }}
                >
                  <LinkedInIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://www.twitter.com"
                  target="_blank"
                  sx={{ color: 'white' }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton
                  component={Link}
                  href="https://www.facebook.com"
                  target="_blank"
                  sx={{ color: 'white' }}
                >
                  <FacebookIcon />
                </IconButton>
              </Box>
            </motion.div>
          </Grid>

          {/* Liens rapides */}
          <Grid component="div" item xs={12} md={4}>
            <motion.div {...fadeInUp}>
              <Typography variant="h6" gutterBottom>
                Liens rapides
              </Typography>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Actualités
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Publications
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Agenda
              </Link>
              <Link href="#" color="inherit" display="block" sx={{ mb: 1 }}>
                Adhérer
              </Link>
            </motion.div>
          </Grid>

          {/* Contact */}
          <Grid component="div" item xs={12} md={4}>
            <motion.div {...fadeInUp}>
              <Typography variant="h6" gutterBottom>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOnIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  77 rue Rambuteau, 75001 Paris
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  +33 (0)1 44 76 90 40
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body2">
                  contact@fna.fr
                </Typography>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.1)' }} />

        <Typography
          variant="body2"
          align="center"
          sx={{ pt: 2 }}
          component={motion.p}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          © {new Date().getFullYear()} La Fédération du Négoce Agricole. Tous droits réservés.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer; 