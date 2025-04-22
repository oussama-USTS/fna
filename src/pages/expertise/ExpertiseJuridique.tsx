import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
  Paper,
  Button,
  Chip,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import GavelIcon from '@mui/icons-material/Gavel';
import BalanceIcon from '@mui/icons-material/Balance';
import DescriptionIcon from '@mui/icons-material/Description';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';
import DownloadIcon from '@mui/icons-material/Download';

const ExpertiseJuridique = () => {
  const theme = useTheme();

  const services = [
    {
      title: 'Conseil Juridique',
      icon: <GavelIcon fontSize="large" />,
      description: 'Accompagnement personnalisé sur vos problématiques juridiques',
      tags: ['Contrats', 'Réglementation', 'Conformité']
    },
    {
      title: 'Expertise Fiscale',
      icon: <AccountBalanceIcon fontSize="large" />,
      description: 'Optimisation et conseil en matière de fiscalité agricole',
      tags: ['TVA', 'Impôts', 'Optimisation']
    },
    {
      title: 'Support Réglementaire',
      icon: <BalanceIcon fontSize="large" />,
      description: 'Veille et assistance sur les évolutions réglementaires',
      tags: ['Veille', 'Normes', 'Mise en conformité']
    }
  ];

  const resources = [
    {
      title: 'Guide Juridique 2024',
      type: 'PDF',
      size: '2.5 MB',
      category: 'Documentation'
    },
    {
      title: 'Modèles de Contrats',
      type: 'ZIP',
      size: '4.8 MB',
      category: 'Templates'
    },
    {
      title: 'Notes Fiscales',
      type: 'PDF',
      size: '1.2 MB',
      category: 'Documentation'
    }
  ];

  const features = [
    {
      icon: <SupportAgentIcon fontSize="large" color="primary" />,
      title: 'Assistance Juridique',
      description: 'Support téléphonique et email pour vos questions juridiques'
    },
    {
      icon: <DescriptionIcon fontSize="large" color="primary" />,
      title: 'Base Documentaire',
      description: 'Accès à notre bibliothèque de documents et modèles'
    },
    {
      icon: <SchoolIcon fontSize="large" color="primary" />,
      title: 'Formation Continue',
      description: 'Sessions de formation sur les actualités juridiques'
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
          backgroundColor: theme.palette.primary.dark,
          backgroundImage: 'linear-gradient(135deg, #1976D2 0%, #64B5F6 100%)',
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
                Expertise Juridique & Fiscale
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '600px', opacity: 0.9 }}>
                Votre partenaire pour la sécurisation juridique et l'optimisation fiscale
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

      {/* Contenu Principal */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Services */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 4,
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        mb: 3,
                      }}
                    >
                      <Box
                        sx={{
                          p: 2,
                          borderRadius: '50%',
                          backgroundColor: `${theme.palette.primary.main}15`,
                        }}
                      >
                        {service.icon}
                      </Box>
                    </Box>
                    <Typography variant="h5" gutterBottom align="center">
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      align="center"
                      sx={{ mb: 2 }}
                    >
                      {service.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      justifyContent="center"
                      flexWrap="wrap"
                      sx={{ gap: 1 }}
                    >
                      {service.tags.map((tag, i) => (
                        <Chip
                          key={i}
                          label={tag}
                          size="small"
                          sx={{
                            backgroundColor: `${theme.palette.primary.main}15`,
                            color: 'primary.main',
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Caractéristiques */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom align="center">
            Nos Services
          </Typography>
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      height: '100%',
                      backgroundColor: 'background.paper',
                    }}
                  >
                    {feature.icon}
                    <Typography variant="h6" sx={{ my: 2 }}>
                      {feature.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Ressources */}
        <Box>
          <Typography variant="h3" gutterBottom>
            Ressources Disponibles
          </Typography>
          <Grid container spacing={2}>
            {resources.map((resource, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                        <Typography variant="h6">{resource.title}</Typography>
                        <Chip
                          label={resource.category}
                          size="small"
                          color="primary"
                          variant="outlined"
                        />
                      </Box>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography variant="body2" color="text.secondary">
                          {resource.type} • {resource.size}
                        </Typography>
                        <Button
                          variant="contained"
                          size="small"
                          startIcon={<DownloadIcon />}
                          sx={{ borderRadius: 20 }}
                        >
                          Télécharger
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ExpertiseJuridique; 