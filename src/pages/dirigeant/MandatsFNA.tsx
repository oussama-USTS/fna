import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  useTheme,
  IconButton,
  Tooltip,
  Link,
} from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BusinessIcon from '@mui/icons-material/Business';

const MandatsFNA = () => {
  const theme = useTheme();

  const mandats = [
    {
      category: 'Conseil d\'Administration',
      members: [
        {
          name: 'Jean-Michel Dupont',
          role: 'Président',
          photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
          email: 'jm.dupont@fna.fr',
          phone: '+33 1 23 45 67 89',
          linkedin: 'https://linkedin.com/in/jmdupont',
          location: 'Paris',
          organization: 'FNA Groupe',
          expertise: ['Stratégie', 'Relations Institutionnelles', 'Développement']
        },
        {
          name: 'Marie Laurent',
          role: 'Vice-Présidente',
          photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
          email: 'm.laurent@fna.fr',
          phone: '+33 1 23 45 67 90',
          linkedin: 'https://linkedin.com/in/mlaurent',
          location: 'Lyon',
          organization: 'FNA Sud-Est',
          expertise: ['Finance', 'Gestion des Risques', 'Innovation']
        }
      ]
    },
    {
      category: 'Commissions Spécialisées',
      members: [
        {
          name: 'Pierre Martin',
          role: 'Président Commission Technique',
          photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
          email: 'p.martin@fna.fr',
          phone: '+33 1 23 45 67 91',
          linkedin: 'https://linkedin.com/in/pmartin',
          location: 'Bordeaux',
          organization: 'FNA Tech',
          expertise: ['Normes Techniques', 'R&D', 'Certification']
        },
        {
          name: 'Sophie Bernard',
          role: 'Présidente Commission Sociale',
          photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
          email: 's.bernard@fna.fr',
          phone: '+33 1 23 45 67 92',
          linkedin: 'https://linkedin.com/in/sbernard',
          location: 'Nantes',
          organization: 'FNA Ouest',
          expertise: ['Droit Social', 'Formation', 'Relations Sociales']
        }
      ]
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
                Mandats FNA
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '600px', opacity: 0.9 }}>
                Découvrez les membres élus et leurs responsabilités au sein de la FNA
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
        {mandats.map((category, categoryIndex) => (
          <Box key={categoryIndex} sx={{ mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            >
              <Typography
                variant="h3"
                gutterBottom
                sx={{
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: 60,
                    height: 4,
                    backgroundColor: 'primary.main',
                    borderRadius: 2,
                  },
                }}
              >
                {category.category}
              </Typography>

              <Grid container spacing={4} sx={{ mt: 2 }}>
                {category.members.map((member, memberIndex) => (
                  <Grid item xs={12} md={6} key={memberIndex}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: (categoryIndex + memberIndex) * 0.1 }}
                    >
                      <Card
                        sx={{
                          height: '100%',
                          background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
                          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                          borderRadius: 2,
                          overflow: 'hidden',
                          transition: 'transform 0.3s ease-in-out',
                          '&:hover': {
                            transform: 'translateY(-8px)',
                          },
                        }}
                      >
                        <CardContent>
                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                            <Avatar
                              src={member.photo}
                              sx={{
                                width: 100,
                                height: 100,
                                border: '4px solid white',
                                boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
                              }}
                            />
                            <Box sx={{ ml: 3 }}>
                              <Typography variant="h5" gutterBottom>
                                {member.name}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                color="primary"
                                sx={{ fontWeight: 'medium' }}
                              >
                                {member.role}
                              </Typography>
                            </Box>
                          </Box>

                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <BusinessIcon sx={{ color: 'text.secondary', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {member.organization}
                            </Typography>
                          </Box>

                          <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                            <LocationOnIcon sx={{ color: 'text.secondary', mr: 1 }} />
                            <Typography variant="body2" color="text.secondary">
                              {member.location}
                            </Typography>
                          </Box>

                          <Box sx={{ mb: 3 }}>
                            <Typography variant="subtitle2" gutterBottom>
                              Domaines d'expertise :
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {member.expertise.map((exp, i) => (
                                <Chip
                                  key={i}
                                  label={exp}
                                  size="small"
                                  sx={{
                                    backgroundColor: `${theme.palette.primary.main}15`,
                                    color: 'primary.main',
                                  }}
                                />
                              ))}
                            </Box>
                          </Box>

                          <Box sx={{ display: 'flex', gap: 1 }}>
                            <Tooltip title="Envoyer un email">
                              <IconButton
                                component={Link}
                                href={`mailto:${member.email}`}
                                size="small"
                                sx={{
                                  backgroundColor: `${theme.palette.primary.main}15`,
                                  '&:hover': {
                                    backgroundColor: `${theme.palette.primary.main}25`,
                                  },
                                }}
                              >
                                <EmailIcon sx={{ color: 'primary.main' }} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Appeler">
                              <IconButton
                                component={Link}
                                href={`tel:${member.phone}`}
                                size="small"
                                sx={{
                                  backgroundColor: `${theme.palette.primary.main}15`,
                                  '&:hover': {
                                    backgroundColor: `${theme.palette.primary.main}25`,
                                  },
                                }}
                              >
                                <PhoneIcon sx={{ color: 'primary.main' }} />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Voir le profil LinkedIn">
                              <IconButton
                                component={Link}
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                size="small"
                                sx={{
                                  backgroundColor: `${theme.palette.primary.main}15`,
                                  '&:hover': {
                                    backgroundColor: `${theme.palette.primary.main}25`,
                                  },
                                }}
                              >
                                <LinkedInIcon sx={{ color: 'primary.main' }} />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default MandatsFNA; 