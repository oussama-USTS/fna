import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Tooltip,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const members = [
  {
    name: 'Thomas Laurent',
    role: 'Président',
    department: 'Direction',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'thomas.laurent@fna.fr',
    bio: 'Plus de 20 ans d\'expérience dans le négoce agricole',
  },
  {
    name: 'Marie Dubois',
    role: 'Directrice des Opérations',
    department: 'Direction',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'marie.dubois@fna.fr',
    bio: 'Experte en gestion opérationnelle et stratégie',
  },
  {
    name: 'Pierre Martin',
    role: 'Responsable Innovation',
    department: 'Innovation & Développement',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'pierre.martin@fna.fr',
    bio: 'Passionné par l\'agriculture de précision',
  },
  {
    name: 'Sophie Bernard',
    role: 'Responsable Développement Durable',
    department: 'Innovation & Développement',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'sophie.bernard@fna.fr',
    bio: 'Spécialiste en agriculture durable',
  },
  {
    name: 'Jean Moreau',
    role: 'Directeur Juridique',
    department: 'Juridique & Conformité',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'jean.moreau@fna.fr',
    bio: 'Expert en droit agricole et environnemental',
  },
  {
    name: 'Claire Petit',
    role: 'Responsable Communication',
    department: 'Communication',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?auto=format&fit=crop&q=80',
    linkedin: '#',
    email: 'claire.petit@fna.fr',
    bio: 'Passionnée par la communication digitale',
  },
];

const departments = ['Direction', 'Innovation & Développement', 'Juridique & Conformité', 'Communication'];

const Organigramme = () => {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        {departments.map((department, deptIndex) => (
          <Box key={department} sx={{ mb: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: deptIndex * 0.2 }}
            >
              <Typography
                variant="h3"
                sx={{
                  mb: 4,
                  fontWeight: 700,
                  color: 'primary.main',
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
                {department}
              </Typography>
            </motion.div>

            <Grid container spacing={4}>
              {members
                .filter((member) => member.department === department)
                .map((member, index) => (
                  <Grid item xs={12} md={6} lg={4} key={member.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <Card
                        component={motion.div}
                        whileHover={{
                          y: -10,
                          boxShadow: theme.shadows[10],
                        }}
                        sx={{
                          height: '100%',
                          borderRadius: 4,
                          overflow: 'hidden',
                          position: 'relative',
                          '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 4,
                            background: 'linear-gradient(90deg, #2196F3, #21CBF3)',
                          },
                        }}
                      >
                        <CardContent sx={{ p: 3 }}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              mb: 2,
                            }}
                          >
                            <Avatar
                              src={member.image}
                              sx={{
                                width: 80,
                                height: 80,
                                border: '3px solid',
                                borderColor: 'primary.main',
                                boxShadow: '0 0 20px rgba(33,150,243,0.3)',
                              }}
                            />
                            <Box sx={{ ml: 2 }}>
                              <Typography
                                variant="h6"
                                sx={{
                                  fontWeight: 700,
                                  color: 'text.primary',
                                }}
                              >
                                {member.name}
                              </Typography>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  color: 'primary.main',
                                  fontWeight: 600,
                                }}
                              >
                                {member.role}
                              </Typography>
                            </Box>
                          </Box>

                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                          >
                            {member.bio}
                          </Typography>

                          <Box
                            sx={{
                              display: 'flex',
                              gap: 1,
                              justifyContent: 'flex-end',
                            }}
                          >
                            <Tooltip title="LinkedIn">
                              <IconButton
                                color="primary"
                                href={member.linkedin}
                                target="_blank"
                                sx={{
                                  '&:hover': {
                                    transform: 'scale(1.1)',
                                  },
                                  transition: 'transform 0.2s',
                                }}
                              >
                                <LinkedInIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="Email">
                              <IconButton
                                color="primary"
                                href={`mailto:${member.email}`}
                                sx={{
                                  '&:hover': {
                                    transform: 'scale(1.1)',
                                  },
                                  transition: 'transform 0.2s',
                                }}
                              >
                                <EmailIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Organigramme; 