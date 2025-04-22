import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Chip,
  Tooltip,
  useTheme,
  alpha,
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';

const departments = [
  {
    name: 'Direction Générale',
    color: '#2196F3',
    icon: BusinessIcon,
    members: [
      {
        name: 'Thomas Martin',
        role: 'Directeur Général',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200',
        email: 'thomas.martin@fna.fr',
        phone: '+33 1 23 45 67 89',
        linkedin: 'linkedin.com/in/thomas-martin',
        expertise: ['Stratégie', 'Management', 'Relations Institutionnelles']
      }
    ]
  },
  {
    name: 'Développement Durable',
    color: '#4CAF50',
    icon: GroupsIcon,
    members: [
      {
        name: 'Marie Laurent',
        role: 'Directrice Développement Durable',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=200&h=200',
        email: 'marie.laurent@fna.fr',
        phone: '+33 1 23 45 67 90',
        linkedin: 'linkedin.com/in/marie-laurent',
        expertise: ['RSE', 'Environnement', 'Innovation']
      },
      {
        name: 'Pierre Dubois',
        role: 'Chargé de Mission Environnement',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?fit=crop&w=200&h=200',
        email: 'pierre.dubois@fna.fr',
        phone: '+33 1 23 45 67 91',
        linkedin: 'linkedin.com/in/pierre-dubois',
        expertise: ['Biodiversité', 'Climat', 'Certification']
      }
    ]
  },
  {
    name: 'Relations Adhérents',
    color: '#FF9800',
    icon: GroupsIcon,
    members: [
      {
        name: 'Sophie Bernard',
        role: 'Directrice Relations Adhérents',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?fit=crop&w=200&h=200',
        email: 'sophie.bernard@fna.fr',
        phone: '+33 1 23 45 67 92',
        linkedin: 'linkedin.com/in/sophie-bernard',
        expertise: ['Communication', 'Animation Réseau', 'Formation']
      }
    ]
  }
];

const Organigramme = () => {
  const theme = useTheme();
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const departmentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const memberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <Box 
      sx={{ 
        py: 8,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh'
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              textAlign: 'center',
              fontWeight: 800,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            Notre Organisation
          </Typography>

          <Grid container spacing={4}>
            {departments.map((department, index) => (
              <Grid item xs={12} md={4} key={department.name}>
                <motion.div variants={departmentVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      borderRadius: 4,
                      overflow: 'visible',
                      position: 'relative',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                      },
                    }}
                    onClick={() => setSelectedDepartment(selectedDepartment === index ? null : index)}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -20,
                        left: 20,
                        backgroundColor: department.color,
                        borderRadius: '50%',
                        width: 60,
                        height: 60,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: `0 8px 20px ${alpha(department.color, 0.4)}`,
                      }}
                    >
                      <department.icon sx={{ fontSize: 30, color: 'white' }} />
                    </Box>

                    <CardContent sx={{ pt: 6 }}>
                      <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                          fontWeight: 700,
                          color: department.color,
                        }}
                      >
                        {department.name}
                      </Typography>

                      <AnimatePresence>
                        {department.members.map((member, memberIndex) => (
                          <motion.div
                            key={member.name}
                            variants={memberVariants}
                            initial="hidden"
                            animate={selectedDepartment === index ? "visible" : "hidden"}
                            exit="hidden"
                            transition={{ delay: memberIndex * 0.2 }}
                          >
                            <Card
                              elevation={0}
                              sx={{
                                mt: 2,
                                p: 2,
                                borderRadius: 2,
                                backgroundColor: alpha(department.color, 0.1),
                                border: '1px solid',
                                borderColor: alpha(department.color, 0.2),
                                transition: 'all 0.3s ease',
                                transform: hoveredMember === `${index}-${memberIndex}` ? 'scale(1.02)' : 'scale(1)',
                                '&:hover': {
                                  backgroundColor: alpha(department.color, 0.15),
                                }
                              }}
                              onMouseEnter={() => setHoveredMember(`${index}-${memberIndex}`)}
                              onMouseLeave={() => setHoveredMember(null)}
                            >
                              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <Avatar
                                  src={member.image}
                                  sx={{
                                    width: 60,
                                    height: 60,
                                    border: '3px solid',
                                    borderColor: department.color,
                                  }}
                                />
                                <Box sx={{ ml: 2 }}>
                                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                                    {member.name}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {member.role}
                                  </Typography>
                                </Box>
                              </Box>

                              <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                                {member.expertise.map((skill, i) => (
                                  <Chip
                                    key={i}
                                    label={skill}
                                    size="small"
                                    sx={{
                                      backgroundColor: alpha(department.color, 0.2),
                                      color: department.color,
                                      fontWeight: 500,
                                    }}
                                  />
                                ))}
                              </Box>

                              <Box sx={{ display: 'flex', gap: 1 }}>
                                <Tooltip title="LinkedIn">
                                  <IconButton
                                    size="small"
                                    sx={{
                                      color: department.color,
                                      '&:hover': {
                                        backgroundColor: alpha(department.color, 0.1),
                                      },
                                    }}
                                  >
                                    <LinkedInIcon />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Email">
                                  <IconButton
                                    size="small"
                                    sx={{
                                      color: department.color,
                                      '&:hover': {
                                        backgroundColor: alpha(department.color, 0.1),
                                      },
                                    }}
                                  >
                                    <EmailIcon />
                                  </IconButton>
                                </Tooltip>
                                <Tooltip title="Téléphone">
                                  <IconButton
                                    size="small"
                                    sx={{
                                      color: department.color,
                                      '&:hover': {
                                        backgroundColor: alpha(department.color, 0.1),
                                      },
                                    }}
                                  >
                                    <PhoneIcon />
                                  </IconButton>
                                </Tooltip>
                              </Box>
                            </Card>
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Organigramme; 