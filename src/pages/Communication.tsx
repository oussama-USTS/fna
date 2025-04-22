import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardMedia,
  Button,
  Chip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import CampaignIcon from '@mui/icons-material/Campaign';
import ShareIcon from '@mui/icons-material/Share';
import DownloadIcon from '@mui/icons-material/Download';
import ArticleIcon from '@mui/icons-material/Article';

const Communication = () => {
  const theme = useTheme();

  const communications = [
    {
      title: 'Kit de Communication 2024',
      description: 'Ressources visuelles et guides pour une communication cohérente',
      image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80',
      type: 'Kit',
      date: '15 Mars 2024'
    },
    {
      title: 'Communiqué de Presse',
      description: 'Position de la FNA sur les enjeux agricoles actuels',
      image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80',
      type: 'Presse',
      date: '18 Mars 2024'
    },
    {
      title: 'Charte Graphique',
      description: 'Guide complet d\'utilisation de l\'identité visuelle',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80',
      type: 'Guide',
      date: '10 Mars 2024'
    }
  ];

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '300px',
          overflow: 'hidden',
          backgroundColor: theme.palette.primary.main,
          backgroundImage: 'linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Container maxWidth="lg" sx={{ height: '100%', position: 'relative', zIndex: 2 }}>
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                color: 'white',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.5rem', md: '3.5rem' },
                  fontWeight: 800,
                  mb: 2,
                }}
              >
                Communication
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '600px', opacity: 0.9 }}>
                Ressources et outils pour une communication efficace et cohérente
              </Typography>
            </Box>
          </Container>
        </motion.div>

        {/* Motif décoratif */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: 'radial-gradient(circle at 20% 150%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
          }}
        />
      </Box>

      {/* Contenu principal */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {communications.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                      },
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ mb: 2 }}>
                      <Chip
                        label={item.type}
                        size="small"
                        color="primary"
                        sx={{ mb: 1 }}
                      />
                      <Typography variant="caption" display="block" color="text.secondary">
                        {item.date}
                      </Typography>
                    </Box>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {item.description}
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                      <Button
                        variant="contained"
                        startIcon={<DownloadIcon />}
                        size="small"
                      >
                        Télécharger
                      </Button>
                      <Button
                        variant="outlined"
                        startIcon={<ShareIcon />}
                        size="small"
                      >
                        Partager
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Section des ressources supplémentaires */}
        <Box sx={{ mt: 8 }}>
          <Typography variant="h3" gutterBottom>
            Ressources supplémentaires
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ArticleIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5">
                    Modèles de Documents
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Accédez à notre bibliothèque de modèles pour vos communications officielles.
                </Typography>
                <Button variant="contained" color="primary">
                  Voir les modèles
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <CampaignIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                  <Typography variant="h5">
                    Guide de Communication
                  </Typography>
                </Box>
                <Typography variant="body1" paragraph>
                  Découvrez nos bonnes pratiques pour une communication efficace.
                </Typography>
                <Button variant="contained" color="primary">
                  Consulter le guide
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Communication; 