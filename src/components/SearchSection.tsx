import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Chip,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { motion, AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';

const mockResults = [
  {
    title: 'Guide des bonnes pratiques',
    type: 'Document',
    category: 'Expertise',
  },
  {
    title: 'Réglementation transport',
    type: 'Article',
    category: 'Infrastructure',
  },
  {
    title: 'Rapport annuel 2023',
    type: 'Document',
    category: 'Vie Fédérale',
  },
];

const SearchSection = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const resultsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  const MotionListItemButton = motion(ListItemButton);

  return (
    <Box
      sx={{
        py: 8,
        backgroundColor: 'background.default',
        minHeight: '50vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Recherche avancée
          </Typography>

          <Box
            sx={{
              maxWidth: 600,
              margin: '0 auto',
              position: 'relative',
            }}
          >
            <TextField
              fullWidth
              placeholder="Rechercher un document, un article..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setTimeout(() => setIsFocused(false), 200)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <motion.div
                      animate={{
                        scale: searchValue ? [1, 1.2, 1] : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <SearchIcon color="primary" />
                    </motion.div>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  backgroundColor: 'white',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  '&:hover, &.Mui-focused': {
                    boxShadow: '0 4px 25px rgba(0,0,0,0.15)',
                  },
                },
              }}
            />

            <LazyMotion features={domAnimation}>
              <AnimatePresence>
                {(isFocused || searchValue) ? (
                  <Box
                    sx={{
                      position: 'absolute',
                      width: '100%',
                      zIndex: 1,
                      marginTop: '8px',
                    }}
                  >
                    <m.div
                      key="results"
                      variants={resultsVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          borderRadius: 2,
                          boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
                          overflow: 'hidden',
                        }}
                      >
                        <List>
                          {mockResults.map((result, index) => (
                            <ListItem key={index} disablePadding>
                              <Box
                                component={ListItemButton}
                                sx={{
                                  display: 'block',
                                  '&:hover': {
                                    backgroundColor: 'rgba(0,0,0,0.02)'
                                  }
                                }}
                              >
                                <Box sx={{ p: 1 }}>
                                  <ListItemText
                                    primary={result.title}
                                    secondary={
                                      <Box sx={{ mt: 1 }}>
                                        <Chip
                                          label={result.type}
                                          size="small"
                                          sx={{
                                            mr: 1,
                                            backgroundColor: 'primary.main',
                                            color: 'white',
                                          }}
                                        />
                                        <Chip
                                          label={result.category}
                                          size="small"
                                          variant="outlined"
                                          color="primary"
                                        />
                                      </Box>
                                    }
                                  />
                                </Box>
                              </Box>
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </m.div>
                  </Box>
                ) : null}
              </AnimatePresence>
            </LazyMotion>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default SearchSection;
