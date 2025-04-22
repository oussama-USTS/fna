import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Chip, 
  IconButton,
  Avatar,
  AvatarGroup,
  Button,
  Tooltip,
  useTheme
} from '@mui/material';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion';
import Calendar from 'react-calendar';
import type { Value } from 'react-calendar/dist/cjs/shared/types';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import 'moment/locale/fr';
import EventIcon from '@mui/icons-material/Event';
import GroupIcon from '@mui/icons-material/Group';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';

moment.locale('fr');

const events = [
  {
    date: '2024-03-20',
    title: 'Assemblée Générale FNA',
    type: 'Vie Fédérale',
    description: 'Réunion annuelle des membres de la FNA pour discuter des orientations stratégiques.',
    location: 'Paris',
    isOnline: true,
    participants: [
      { name: 'Marie Laurent', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' },
      { name: 'Thomas Dubois', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' },
      { name: 'Sophie Martin', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' }
    ],
    color: '#2196F3'
  },
  {
    date: '2024-03-25',
    title: 'Commission Développement Durable',
    type: 'Commission',
    description: 'Discussion sur les nouvelles initiatives écologiques dans le secteur agricole.',
    location: 'Lyon',
    isOnline: false,
    participants: [
      { name: 'Pierre Leroy', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d' },
      { name: 'Claire Bernard', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb' }
    ],
    color: '#4CAF50'
  },
  {
    date: '2024-04-05',
    title: 'Réunion Régionale NCE',
    type: 'Région',
    description: 'Point sur les activités de la région Nord-Centre-Est.',
    location: 'Strasbourg',
    isOnline: true,
    participants: [
      { name: 'Jean Dupont', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e' },
      { name: 'Marie Laurent', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330' }
    ],
    color: '#FF9800'
  },
  {
    date: '2024-04-12',
    title: 'Formation Innovation Agricole',
    type: 'Formation',
    description: 'Session de formation sur les nouvelles technologies en agriculture.',
    location: 'Bordeaux',
    isOnline: true,
    participants: [
      { name: 'Sophie Martin', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80' },
      { name: 'Thomas Dubois', avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7' }
    ],
    color: '#9C27B0'
  }
];

interface Event {
  date: string;
  title: string;
  type: string;
  description: string;
  location: string;
  isOnline: boolean;
  participants: Array<{
    name: string;
    avatar: string;
  }>;
  color: string;
}

interface TileContentProps {
  date: Date;
  view: string;
}

const AnimatedBox = styled(motion.div)({
  display: 'flex',
  flexGrow: 1
});

const MotionContainer = ({ children, ...props }: HTMLMotionProps<"div">) => (
  <motion.div {...props}>
    {children}
  </motion.div>
);

const CalendarComponent = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [, setSelectedEvent] = useState<Event | null>(null);
  const theme = useTheme();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setDate(value);
      setSelectedEvent(null);
    }
  };

  const getEventsForDate = (date: Date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    return events.filter(event => event.date === formattedDate);
  };

  const tileContent = ({ date, view }: TileContentProps) => {
    if (view === 'month') {
      const dayEvents = getEventsForDate(date);
      if (dayEvents.length > 0) {
        return (
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            mt: 0.5
          }}>
            {dayEvents.map((event, index) => (
              <Box
                key={index}
                sx={{
                  width: '4px',
                  height: '4px',
                  borderRadius: '50%',
                  backgroundColor: event.color,
                  mb: 0.2
                }}
              />
            ))}
          </Box>
        );
      }
    }
    return null;
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'white' }}>
      <Container maxWidth="lg">
        <MotionContainer
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MotionContainer variants={itemVariants}>
            <Typography
              variant="h2"
              sx={{
                mb: 6,
                textAlign: 'center',
                color: 'primary.main',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                backgroundClip: 'text',
                textFillColor: 'transparent',
              }}
            >
              Calendrier des événements
            </Typography>
          </MotionContainer>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 4,
            }}
          >
            <MotionContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                  '.react-calendar': {
                    border: 'none',
                    width: '100%',
                    backgroundColor: 'transparent',
                    fontFamily: 'inherit',
                    padding: '1rem',
                  },
                  '.react-calendar__tile': {
                    padding: '2em 0.5em',
                    position: 'relative',
                    '&:enabled:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    },
                  },
                  '.react-calendar__tile--active': {
                    backgroundColor: theme.palette.primary.main,
                    color: 'white',
                    borderRadius: '8px',
                    '&:enabled:hover': {
                      backgroundColor: theme.palette.primary.dark,
                    },
                  },
                  '.react-calendar__tile--now': {
                    backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    borderRadius: '8px',
                  },
                  '.react-calendar__navigation': {
                    marginBottom: '2rem',
                  },
                  '.react-calendar__navigation button': {
                    borderRadius: '8px',
                    '&:enabled:hover': {
                      backgroundColor: 'rgba(33, 150, 243, 0.1)',
                    },
                  },
                }}
              >
                <Calendar
                  onChange={handleDateChange}
                  value={date}
                  locale="fr-FR"
                  tileContent={tileContent}
                />
              </Paper>

              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="contained"
                  startIcon={<AddIcon />}
                  sx={{
                    borderRadius: '20px',
                    px: 3,
                    py: 1,
                    boxShadow: '0 4px 20px rgba(33, 150, 243, 0.3)',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 25px rgba(33, 150, 243, 0.4)',
                    },
                    transition: 'all 0.3s ease',
                  }}
                >
                  Ajouter un événement
                </Button>
              </Box>
            </MotionContainer>

            <MotionContainer
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  borderRadius: 4,
                  boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                  height: '100%',
                  minHeight: '500px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                }}
              >
                <Typography variant="h5" sx={{ 
                  mb: 3, 
                  color: 'primary.main',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  <EventIcon />
                  Événements du {moment(date).format('DD MMMM YYYY')}
                </Typography>

                <AnimatePresence mode="wait">
                  {getEventsForDate(date).length > 0 ? (
                    getEventsForDate(date).map((event, index) => (
                      <MotionContainer
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Paper
                          elevation={0}
                          sx={{
                            mb: 2,
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: 'background.paper',
                            border: '1px solid',
                            borderColor: 'divider',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-4px)',
                              boxShadow: '0 12px 30px rgba(0,0,0,0.1)',
                            },
                          }}
                          onClick={() => setSelectedEvent(event)}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                            <Chip
                              label={event.type}
                              size="small"
                              sx={{
                                backgroundColor: event.color,
                                color: 'white',
                                fontWeight: 600,
                              }}
                            />
                            {event.isOnline && (
                              <Tooltip title="Événement en ligne">
                                <IconButton size="small" color="primary">
                                  <VideoCallIcon />
                                </IconButton>
                              </Tooltip>
                            )}
                          </Box>

                          <Typography variant="h6" gutterBottom>
                            {event.title}
                          </Typography>

                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {event.description}
                          </Typography>

                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <LocationOnIcon fontSize="small" color="action" />
                              <Typography variant="body2" color="text.secondary">
                                {event.location}
                              </Typography>
                            </Box>

                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              <GroupIcon fontSize="small" color="action" />
                              <AvatarGroup max={3} sx={{ '& .MuiAvatar-root': { width: 24, height: 24 } }}>
                                {event.participants.map((participant, i) => (
                                  <Tooltip key={i} title={participant.name}>
                                    <Avatar
                                      alt={participant.name}
                                      src={participant.avatar}
                                      sx={{ width: 24, height: 24 }}
                                    />
                                  </Tooltip>
                                ))}
                              </AvatarGroup>
                            </Box>
                          </Box>
                        </Paper>
                      </MotionContainer>
                    ))
                  ) : (
                    <MotionContainer
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Box
                        sx={{
                          textAlign: 'center',
                          py: 8,
                          color: 'text.secondary',
                        }}
                      >
                        <EventIcon sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
                        <Typography>
                          Aucun événement prévu pour cette date
                        </Typography>
                      </Box>
                    </MotionContainer>
                  )}
                </AnimatePresence>
              </Paper>
            </MotionContainer>
          </Box>
        </MotionContainer>
      </Container>
    </Box>
  );
};

export default CalendarComponent; 