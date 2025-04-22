import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Avatar,
  AvatarGroup,
  LinearProgress,
  useTheme,
  Divider,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { motion } from 'framer-motion';
import GavelIcon from '@mui/icons-material/Gavel';
import GroupsIcon from '@mui/icons-material/Groups';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ActionsSyndicales = () => {
  const theme = useTheme();

  const actions = [
    {
      title: 'Négociations Collectives 2024',
      status: 'En cours',
      progress: 65,
      description: 'Négociations sur les conditions de travail et les rémunérations',
      date: '15 Mars 2024',
      participants: [
        { name: 'Marie Laurent', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
        { name: 'Thomas Dubois', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
        { name: 'Sophie Martin', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' }
      ],
      objectives: [
        'Amélioration des conditions salariales',
        'Révision des accords de branche',
        'Mise en place de nouveaux avantages sociaux'
      ]
    },
    {
      title: 'Réforme du Statut Agricole',
      status: 'Planifié',
      progress: 25,
      description: 'Participation aux discussions sur la réforme du statut agricole',
      date: '20 Mars 2024',
      participants: [
        { name: 'Pierre Leroy', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
        { name: 'Claire Bernard', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' }
      ],
      objectives: [
        'Défense des intérêts des négociants',
        'Propositions d\'amendements',
        'Consultation des adhérents'
      ]
    },
    {
      title: 'Protection des Exploitants',
      status: 'Terminé',
      progress: 100,
      description: 'Mise en place de nouvelles mesures de protection',
      date: '10 Mars 2024',
      participants: [
        { name: 'Jean Dupont', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
        { name: 'Marie Laurent', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }
      ],
      objectives: [
        'Renforcement des garanties',
        'Simplification des procédures',
        'Formation des acteurs'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En cours':
        return theme.palette.primary.main;
      case 'Planifié':
        return theme.palette.warning.main;
      case 'Terminé':
        return theme.palette.success.main;
      default:
        return theme.palette.grey[500];
    }
  };

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
                Actions Syndicales
              </Typography>
              <Typography variant="h5" sx={{ maxWidth: '600px', opacity: 0.9 }}>
                Suivi des actions et négociations en cours pour la défense de vos intérêts
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

      {/* Statistiques */}
      <Container maxWidth="lg" sx={{ mt: -5, position: 'relative', zIndex: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #E3F2FD 0%, #BBDEFB 100%)',
                }}
              >
                <GavelIcon sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h4" fontWeight="bold">12</Typography>
                  <Typography variant="body2" color="text.secondary">Actions en cours</Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #E8F5E9 0%, #C8E6C9 100%)',
                }}
              >
                <CheckCircleIcon sx={{ fontSize: 40, color: 'success.main', mr: 2 }} />
                <Box>
                  <Typography variant="h4" fontWeight="bold">8</Typography>
                  <Typography variant="body2" color="text.secondary">Actions terminées</Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #FFF3E0 0%, #FFE0B2 100%)',
                }}
              >
                <GroupsIcon sx={{ fontSize: 40, color: 'warning.main', mr: 2 }} />
                <Box>
                  <Typography variant="h4" fontWeight="bold">45</Typography>
                  <Typography variant="body2" color="text.secondary">Participants actifs</Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card
                sx={{
                  p: 2,
                  display: 'flex',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #F3E5F5 0%, #E1BEE7 100%)',
                }}
              >
                <TrendingUpIcon sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
                <Box>
                  <Typography variant="h4" fontWeight="bold">89%</Typography>
                  <Typography variant="body2" color="text.secondary">Taux de succès</Typography>
                </Box>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Actions en cours */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom>
          Actions en cours
        </Typography>
        <Grid container spacing={4}>
          {actions.map((action, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
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
                  <CardContent>
                    <Box sx={{ mb: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip
                        label={action.status}
                        sx={{
                          backgroundColor: getStatusColor(action.status),
                          color: 'white',
                        }}
                      />
                      <Typography variant="caption" color="text.secondary">
                        <CalendarTodayIcon sx={{ fontSize: 16, mr: 0.5, verticalAlign: 'text-bottom' }} />
                        {action.date}
                      </Typography>
                    </Box>

                    <Typography variant="h5" gutterBottom>
                      {action.title}
                    </Typography>

                    <Typography variant="body2" color="text.secondary" paragraph>
                      {action.description}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Typography variant="subtitle2" gutterBottom>
                        Objectifs :
                      </Typography>
                      {action.objectives.map((objective, i) => (
                        <Typography
                          key={i}
                          variant="body2"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 0.5,
                            '&::before': {
                              content: '"•"',
                              color: 'primary.main',
                              mr: 1,
                            },
                          }}
                        >
                          {objective}
                        </Typography>
                      ))}
                    </Box>

                    <Box sx={{ mt: 2 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                        <Typography variant="body2" color="text.secondary">
                          Progression
                        </Typography>
                        <Typography variant="body2" color="primary">
                          {action.progress}%
                        </Typography>
                      </Box>
                      <LinearProgress
                        variant="determinate"
                        value={action.progress}
                        sx={{
                          height: 6,
                          borderRadius: 3,
                          backgroundColor: alpha(theme.palette.primary.main, 0.1),
                          '& .MuiLinearProgress-bar': {
                            borderRadius: 3,
                          },
                        }}
                      />
                    </Box>
                  </CardContent>

                  <Divider sx={{ my: 'auto' }} />

                  <CardActions sx={{ p: 2, justifyContent: 'space-between' }}>
                    <AvatarGroup max={3}>
                      {action.participants.map((participant, i) => (
                        <Avatar
                          key={i}
                          alt={participant.name}
                          src={participant.avatar}
                          sx={{ width: 32, height: 32 }}
                        />
                      ))}
                    </AvatarGroup>
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        borderRadius: '20px',
                        px: 2,
                      }}
                    >
                      Voir les détails
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ActionsSyndicales; 