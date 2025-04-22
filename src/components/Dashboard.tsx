import React from 'react';
import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  Divider,
  Chip,
} from '@mui/material';
import { motion } from 'framer-motion';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ArticleIcon from '@mui/icons-material/Article';
import EventIcon from '@mui/icons-material/Event';
import DescriptionIcon from '@mui/icons-material/Description';

const recentDocuments = [
  {
    title: 'Note de conjoncture - Mars 2024',
    type: 'PDF',
    date: '22/03/2024',
  },
  {
    title: 'Compte-rendu réunion régionale NCE',
    type: 'DOC',
    date: '20/03/2024',
  },
  {
    title: 'Synthèse développement durable T1 2024',
    type: 'PDF',
    date: '15/03/2024',
  },
];

const upcomingEvents = [
  {
    title: 'Assemblée Générale FNA',
    date: '15 Avril 2024',
    type: 'Vie Fédérale',
  },
  {
    title: 'Commission Développement Durable',
    date: '22 Avril 2024',
    type: 'Commission',
  },
];

const notifications = [
  {
    message: 'Nouvelle réglementation transport disponible',
    date: 'Il y a 2 heures',
    priority: 'high',
  },
  {
    message: 'Mise à jour des documents fiscaux',
    date: 'Il y a 1 jour',
    priority: 'medium',
  },
];

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <Box sx={{ py: 4, backgroundColor: '#f5f5f7' }}>
      <Container maxWidth="xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3}>
            {/* Welcome Section */}
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <Paper
                  sx={{
                    p: 4,
                    background: 'linear-gradient(135deg, #1B4965 0%, #5FA8D3 100%)',
                    color: 'white',
                    borderRadius: 3,
                  }}
                >
                  <Typography variant="h4" gutterBottom>
                    Bienvenue sur votre Extranet FNA
                  </Typography>
                  <Typography variant="subtitle1">
                    Accédez à vos documents, suivez l'actualité et restez informé des dernières mises à jour.
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>

            {/* Quick Actions */}
            <Grid item xs={12} md={8}>
              <motion.div variants={itemVariants}>
                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Documents récents
                  </Typography>
                  <List>
                    {recentDocuments.map((doc, index) => (
                      <React.Fragment key={index}>
                        <ListItem
                          sx={{
                            '&:hover': {
                              backgroundColor: 'rgba(0,0,0,0.02)',
                            },
                          }}
                        >
                          <ListItemText
                            primary={doc.title}
                            secondary={doc.date}
                          />
                          <Chip
                            label={doc.type}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                        </ListItem>
                        {index < recentDocuments.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<DescriptionIcon />}
                    >
                      Voir tous les documents
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Notifications */}
            <Grid item xs={12} md={4}>
              <motion.div variants={itemVariants}>
                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Notifications
                  </Typography>
                  <List>
                    {notifications.map((notif, index) => (
                      <React.Fragment key={index}>
                        <ListItem>
                          <ListItemText
                            primary={notif.message}
                            secondary={notif.date}
                            primaryTypographyProps={{
                              color: notif.priority === 'high' ? 'error' : 'inherit',
                            }}
                          />
                        </ListItem>
                        {index < notifications.length - 1 && <Divider />}
                      </React.Fragment>
                    ))}
                  </List>
                  <Box sx={{ mt: 2 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<NotificationsIcon />}
                    >
                      Toutes les notifications
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>

            {/* Calendar Events */}
            <Grid item xs={12}>
              <motion.div variants={itemVariants}>
                <Paper sx={{ p: 3, borderRadius: 3 }}>
                  <Typography variant="h6" gutterBottom>
                    Prochains événements
                  </Typography>
                  <Grid container spacing={2}>
                    {upcomingEvents.map((event, index) => (
                      <Grid item xs={12} sm={6} md={4} key={index}>
                        <Paper
                          elevation={0}
                          sx={{
                            p: 2,
                            backgroundColor: 'rgba(0,0,0,0.02)',
                            borderRadius: 2,
                          }}
                        >
                          <Typography variant="subtitle1" gutterBottom>
                            {event.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {event.date}
                          </Typography>
                          <Chip
                            label={event.type}
                            size="small"
                            sx={{ mt: 1 }}
                            color="primary"
                          />
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                  <Box sx={{ mt: 3 }}>
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<EventIcon />}
                    >
                      Voir le calendrier complet
                    </Button>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Dashboard; 