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
  Avatar,
  AvatarGroup,
  Button,
  Chip,
} from '@mui/material';
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { motion } from 'framer-motion';
import GroupsIcon from '@mui/icons-material/Groups';
import EventIcon from '@mui/icons-material/Event';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const VieFederale = () => {
  const theme = useTheme();

  const stats = [
    {
      icon: <GroupsIcon fontSize="large" />,
      value: '2,500+',
      label: 'Adhérents',
      color: theme.palette.primary.main
    },
    {
      icon: <EventIcon fontSize="large" />,
      value: '150+',
      label: 'Événements annuels',
      color: theme.palette.success.main
    },
    {
      icon: <TrendingUpIcon fontSize="large" />,
      value: '95%',
      label: 'Taux de satisfaction',
      color: theme.palette.warning.main
    }
  ];

  const events = [
    {
      title: 'Assemblée Générale 2024',
      date: '15 Avril 2024',
      location: 'Paris',
      description: 'Réunion annuelle des membres pour définir les orientations stratégiques',
      participants: [
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
        'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7',
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80'
      ]
    },
    {
      title: 'Commission Développement',
      date: '20 Mai 2024',
      location: 'Lyon',
      description: 'Discussion sur les projets de développement et d\'innovation',
      participants: [
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d'
      ]
    }
  ];

  const achievements = [
    {
      year: '2023',
      title: 'Certification ISO 9001',
      description: 'Obtention de la certification qualité pour nos processus'
    },
    {
      year: '2022',
      title: 'Prix de l\'Innovation',
      description: 'Reconnaissance de nos initiatives en matière d\'agriculture durable'
    },
    {
      year: '2021',
      title: 'Extension Nationale',
      description: 'Couverture complète du territoire avec de nouvelles antennes régionales'
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
                Vie Fédérale
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '600px', opacity: 0.9 }}>
                Découvrez la dynamique de notre fédération et ses activités
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
        {/* Statistiques */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {stats.map((stat, index) => (
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
                      display: 'inline-flex',
                      p: 2,
                      borderRadius: '50%',
                      backgroundColor: `${stat.color}15`,
                      color: stat.color,
                      mb: 2,
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="h3" gutterBottom>
                    {stat.value}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Événements à venir */}
        <Box sx={{ mb: 8 }}>
          <Typography variant="h3" gutterBottom>
            Événements à venir
          </Typography>
          <Grid container spacing={4}>
            {events.map((event, index) => (
              <Grid item xs={12} md={6} key={index}>
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
                      <Typography variant="h5" gutterBottom>
                        {event.title}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <CalendarTodayIcon sx={{ mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {event.date}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <LocationOnIcon sx={{ mr: 1, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary">
                            {event.location}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography variant="body1" paragraph>
                        {event.description}
                      </Typography>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <AvatarGroup max={4}>
                          {event.participants.map((participant, i) => (
                            <Avatar key={i} src={participant} />
                          ))}
                        </AvatarGroup>
                        <Button
                          variant="contained"
                          size="small"
                          sx={{ borderRadius: 20 }}
                        >
                          S'inscrire
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Réalisations */}
        <Box>
          <Typography variant="h3" gutterBottom>
            Nos Réalisations
          </Typography>
          <Timeline position="alternate">
            {achievements.map((achievement, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <EmojiEventsIcon />
                  </TimelineDot>
                  {index < achievements.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        backgroundColor: 'background.paper',
                      }}
                    >
                      <Typography variant="h6" component="span">
                        {achievement.title}
                      </Typography>
                      <Typography variant="caption" display="block" color="primary" gutterBottom>
                        {achievement.year}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {achievement.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </Box>
      </Container>
    </Box>
  );
};

export default VieFederale; 