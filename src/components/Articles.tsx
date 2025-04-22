import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Tab,
  Tabs,
  useTheme,
  Button,
  Avatar,
  AvatarGroup,
  LinearProgress,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const articles = [
  {
    title: 'Innovation dans l\'Agriculture de Précision',
    category: 'Innovation',
    date: '20 Mars 2024',
    image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80',
    excerpt: 'Découvrez comment les drones et l\'IA révolutionnent l\'agriculture moderne pour une meilleure productivité et une gestion optimisée des ressources.',
    tags: ['Technologie', 'Agriculture', 'IA'],
    author: {
      name: 'Marie Laurent',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      role: 'Expert en AgriTech'
    },
    stats: {
      likes: 234,
      comments: 45,
      shares: 89,
      readTime: '8 min',
      progress: 85
    }
  },
  {
    title: 'Nouvelles Réglementations PAC 2024',
    category: 'Réglementation',
    date: '19 Mars 2024',
    image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80',
    excerpt: 'Analyse détaillée des changements majeurs de la PAC 2024 et leurs impacts sur le secteur agricole français. Guide pratique pour les exploitants.',
    tags: ['PAC', 'Réglementation', 'Europe'],
    author: {
      name: 'Pierre Dubois',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      role: 'Expert Politique Agricole'
    },
    stats: {
      likes: 456,
      comments: 89,
      shares: 234,
      readTime: '12 min',
      progress: 92
    }
  },
  {
    title: 'Développement Durable en Agriculture',
    category: 'Environnement',
    date: '18 Mars 2024',
    image: 'https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?auto=format&fit=crop&q=80',
    excerpt: 'Les nouvelles pratiques écologiques qui transforment le secteur agricole. Focus sur les initiatives locales et les solutions innovantes.',
    tags: ['Écologie', 'Développement durable'],
    author: {
      name: 'Thomas Dubois',
      avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
      role: 'Consultant en Développement Durable'
    },
    stats: {
      likes: 567,
      comments: 123,
      shares: 234,
      readTime: '6 min',
      progress: 92
    }
  },
  {
    title: 'Révolution Numérique dans l\'Agriculture',
    category: 'Innovation',
    date: '17 Mars 2024',
    image: 'https://images.unsplash.com/photo-1581091226825-c6a89e7e4801?auto=format&fit=crop&q=80',
    excerpt: 'Smart farming et IoT : comment la digitalisation transforme les exploitations agricoles. Témoignages et retours d\'expérience.',
    tags: ['Digital', 'IoT', 'Smart Farming'],
    author: {
      name: 'Sophie Martin',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      role: 'Experte Transformation Digitale'
    },
    stats: {
      likes: 345,
      comments: 67,
      shares: 156,
      readTime: '10 min',
      progress: 78
    }
  },
  {
    title: 'Gestion des Ressources Hydriques',
    category: 'Environnement',
    date: '16 Mars 2024',
    image: 'https://images.unsplash.com/photo-1470685983317-0084951ce1ca?auto=format&fit=crop&q=80',
    excerpt: 'Solutions innovantes pour l\'irrigation et la gestion de l\'eau en agriculture. Adaptation aux changements climatiques.',
    tags: ['Eau', 'Climat', 'Innovation'],
    author: {
      name: 'Claire Bernard',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80',
      role: 'Ingénieure Agronome'
    },
    stats: {
      likes: 289,
      comments: 45,
      shares: 112,
      readTime: '7 min',
      progress: 88
    }
  },
  {
    title: 'Formation : Les Nouveaux Métiers Agricoles',
    category: 'Formation',
    date: '15 Mars 2024',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&q=80',
    excerpt: 'Découvrez les nouvelles opportunités de carrière dans le secteur agricole moderne. Focus sur les métiers émergents et les formations.',
    tags: ['Formation', 'Emploi', 'Carrière'],
    author: {
      name: 'Jean Dupont',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      role: 'Responsable Formation'
    },
    stats: {
      likes: 189,
      comments: 34,
      shares: 78,
      readTime: '7 min',
      progress: 95
    }
  },
  {
    title: 'Marchés Agricoles : Tendances 2024',
    category: 'Économie',
    date: '14 Mars 2024',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80',
    excerpt: 'Analyse approfondie des tendances des marchés agricoles. Prévisions et opportunités pour les acteurs du secteur.',
    tags: ['Marchés', 'Analyse', 'Économie'],
    author: {
      name: 'Michel Lambert',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
      role: 'Analyste Économique'
    },
    stats: {
      likes: 412,
      comments: 87,
      shares: 156,
      readTime: '9 min',
      progress: 82
    }
  },
  {
    title: 'Biocontrôle : Avancées Majeures',
    category: 'Innovation',
    date: '13 Mars 2024',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&q=80',
    excerpt: 'Les dernières innovations en matière de biocontrôle et protection des cultures. Solutions naturelles et durables.',
    tags: ['Biocontrôle', 'Protection', 'Recherche'],
    author: {
      name: 'Anne Rousseau',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80',
      role: 'Chercheuse en Agronomie'
    },
    stats: {
      likes: 378,
      comments: 92,
      shares: 145,
      readTime: '8 min',
      progress: 90
    }
  }
];

const categories = ['Tous', 'Innovation', 'Environnement', 'Économie', 'Formation', 'Réglementation'];

const Articles = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const theme = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const filteredArticles = selectedCategory === 'Tous'
    ? articles
    : articles.filter(article => article.category === selectedCategory);

  return (
    <Box 
      id="articles"
      ref={ref}
      sx={{ 
        py: 8, 
        backgroundColor: 'background.default',
        minHeight: '100vh',
        scrollMarginTop: '64px' // Pour le défilement fluide sous le header fixe
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 2,
              textAlign: 'center',
              color: 'primary.main',
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            Actualités du Secteur
          </Typography>

          <Typography
            variant="h5"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'text.secondary',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Restez informé des dernières actualités et innovations du monde agricole
          </Typography>

          <Box sx={{ mb: 6, borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={selectedCategory}
              onChange={(e, newValue) => setSelectedCategory(newValue)}
              variant="scrollable"
              scrollButtons="auto"
              sx={{
                '& .MuiTab-root': {
                  fontSize: '1rem',
                  fontWeight: 600,
                  textTransform: 'none',
                  minWidth: 120,
                },
              }}
            >
              {categories.map((category) => (
                <Tab
                  key={category}
                  label={category}
                  value={category}
                  sx={{
                    '&.Mui-selected': {
                      color: 'primary.main',
                    },
                  }}
                />
              ))}
            </Tabs>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          <AnimatePresence>
            {filteredArticles.map((article, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      overflow: 'hidden',
                      boxShadow: hoveredCard === index 
                        ? '0 14px 50px rgba(0,0,0,0.25)' 
                        : '0 8px 40px rgba(0,0,0,0.12)',
                      transition: 'all 0.3s ease-in-out',
                      position: 'relative',
                      '&:hover': {
                        '& .MuiCardMedia-root': {
                          transform: 'scale(1.1)',
                        },
                        '& .article-overlay': {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                      <CardMedia
                        component="img"
                        image={article.image}
                        alt={article.title}
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          transition: 'transform 0.3s ease-in-out',
                        }}
                      />
                      <Box
                        className="article-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bgcolor: 'rgba(0,0,0,0.3)',
                          opacity: 0,
                          transition: 'opacity 0.3s ease-in-out',
                        }}
                      />
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip
                          label={article.category}
                          size="small"
                          sx={{
                            bgcolor: 'primary.main',
                            color: 'white',
                            fontWeight: 600,
                          }}
                        />
                        {article.tags.map((tag, i) => (
                          <Chip
                            key={i}
                            label={tag}
                            size="small"
                            variant="outlined"
                            sx={{ borderColor: 'primary.main', color: 'primary.main' }}
                          />
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <Avatar src={article.author.avatar} sx={{ mr: 2 }} />
                        <Box>
                          <Typography variant="subtitle2" fontWeight="bold">
                            {article.author.name}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {article.author.role}
                          </Typography>
                        </Box>
                      </Box>

                      <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                          fontWeight: 700,
                          mb: 2,
                          lineHeight: 1.4,
                        }}
                      >
                        {article.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        {article.excerpt}
                      </Typography>

                      <Box sx={{ mt: 2, mb: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            Progression de lecture
                          </Typography>
                          <Typography variant="caption" color="primary">
                            {article.stats.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={article.stats.progress}
                          sx={{
                            height: 4,
                            borderRadius: 2,
                            bgcolor: 'rgba(0,0,0,0.1)',
                            '& .MuiLinearProgress-bar': {
                              borderRadius: 2,
                            }
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          mt: 'auto',
                          pt: 2,
                          borderTop: '1px solid',
                          borderColor: 'divider',
                        }}
                      >
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          <IconButton size="small">
                            <ThumbUpIcon fontSize="small" />
                          </IconButton>
                          <Typography variant="caption" color="text.secondary">
                            {article.stats.likes}
                          </Typography>
                          <IconButton size="small">
                            <CommentIcon fontSize="small" />
                          </IconButton>
                          <Typography variant="caption" color="text.secondary">
                            {article.stats.comments}
                          </Typography>
                          <IconButton size="small">
                            <ShareIcon fontSize="small" />
                          </IconButton>
                          <Typography variant="caption" color="text.secondary">
                            {article.stats.shares}
                          </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="caption" color="text.secondary">
                            {article.stats.readTime}
                          </Typography>
                          <IconButton
                            color="primary"
                            sx={{
                              '&:hover': {
                                transform: 'translateX(4px)',
                              },
                              transition: 'transform 0.2s',
                            }}
                          >
                            <ArrowForwardIcon />
                          </IconButton>
                        </Box>
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
    </Box>
  );
};

export default Articles; 