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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import BusinessIcon from '@mui/icons-material/Business';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SecurityIcon from '@mui/icons-material/Security';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import HandshakeIcon from '@mui/icons-material/Handshake';

const ExpertiseEntreprise = () => {
  const theme = useTheme();

  const expertiseAreas = [
    {
      title: 'Gestion d\'Entreprise',
      icon: <BusinessIcon color="primary" />,
      items: [
        'Optimisation des processus opérationnels',
        'Gestion des ressources humaines',
        'Planification stratégique',
        'Management de la qualité'
      ]
    },
    {
      title: 'Finance et Comptabilité',
      icon: <AccountBalanceIcon color="primary" />,
      items: [
        'Analyse financière',
        'Gestion de trésorerie',
        'Optimisation fiscale',
        'Contrôle de gestion'
      ]
    },
    {
      title: 'Développement Commercial',
      icon: <TrendingUpIcon color="primary" />,
      items: [
        'Stratégie commerciale',
        'Développement des marchés',
        'Relations clients',
        'Marketing agricole'
      ]
    }
  ];

  const services = [
    {
      title: 'Audit et Conseil',
      description: 'Évaluation complète de votre entreprise et recommandations stratégiques',
      icon: <AnalyticsIcon fontSize="large" />
    },
    {
      title: 'Accompagnement Juridique',
      description: 'Support légal et réglementaire pour vos activités',
      icon: <SecurityIcon fontSize="large" />
    },
    {
      title: 'Networking',
      description: 'Mise en relation avec les acteurs clés du secteur',
      icon: <HandshakeIcon fontSize="large" />
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
                Expertise Entreprise
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '600px', opacity: 0.9 }}>
                Solutions et accompagnement pour la performance de votre entreprise
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
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    borderRadius: 4,
                    backgroundColor: 'background.paper',
                    transition: 'transform 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: `${theme.palette.primary.main}15`,
                      mx: 'auto',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography variant="h5" gutterBottom>
                    {service.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {service.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Domaines d'expertise */}
        {expertiseAreas.map((area, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card sx={{ mb: 4, borderRadius: 4, overflow: 'hidden' }}>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  {area.icon}
                  <Typography variant="h5" sx={{ ml: 2 }}>
                    {area.title}
                  </Typography>
                </Box>
                <List>
                  {area.items.map((item, itemIndex) => (
                    <React.Fragment key={itemIndex}>
                      <ListItem>
                        <ListItemIcon>
                          <Box
                            sx={{
                              width: 8,
                              height: 8,
                              borderRadius: '50%',
                              backgroundColor: 'primary.main',
                            }}
                          />
                        </ListItemIcon>
                        <ListItemText primary={item} />
                      </ListItem>
                      {itemIndex < area.items.length - 1 && <Divider component="li" />}
                    </React.Fragment>
                  ))}
                </List>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default ExpertiseEntreprise; 