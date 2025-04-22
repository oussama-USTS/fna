import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Chip,
  Tooltip,
  Button,
  Collapse,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import FolderIcon from '@mui/icons-material/Folder';
import DescriptionIcon from '@mui/icons-material/Description';
import DownloadIcon from '@mui/icons-material/Download';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ZipIcon from '@mui/icons-material/FolderZip';

// Exemple de structure de données pour les documents
const documents = {
  'Toute l\'entreprise': {
    documents: [
      { name: 'Rapport annuel 2023', type: 'pdf', size: '2.5 MB', date: '2024-03-15' },
      { name: 'Plan stratégique 2024', type: 'docx', size: '1.8 MB', date: '2024-03-10' },
    ]
  },
  'Communication': {
    documents: [
      { name: 'Charte graphique', type: 'pdf', size: '5.2 MB', date: '2024-02-28' },
      { name: 'Kit de communication', type: 'zip', size: '15.4 MB', date: '2024-03-01' },
    ]
  },
  'Expertise': {
    'Entreprise': {
      documents: [
        { name: 'Convention collective 2024', type: 'pdf', size: '3.1 MB', date: '2024-01-15' },
        { name: 'Guide formation professionnelle', type: 'pdf', size: '2.8 MB', date: '2024-02-20' },
      ]
    },
    'Juridique et Fiscal': {
      documents: [
        { name: 'Guide fiscal 2024', type: 'pdf', size: '4.2 MB', date: '2024-01-10' },
        { name: 'Modèles de contrats', type: 'zip', size: '8.7 MB', date: '2024-02-15' },
      ]
    }
  }
};

const Documentation = () => {
  const theme = useTheme();
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const getFileIcon = (type: string) => {
    switch(type) {
      case 'pdf':
        return <DescriptionIcon color="error" />;
      case 'docx':
        return <DescriptionIcon color="primary" />;
      case 'zip':
        return <ZipIcon color="action" />;
      default:
        return <DescriptionIcon />;
    }
  };

  const renderDocuments = (docs: any, level: number = 0) => {
    return Object.entries(docs).map(([category, content]: [string, any]) => (
      <Box key={category} sx={{ ml: level * 2 }}>
        {content.documents ? (
          <>
            <ListItem
              button
              onClick={() => toggleCategory(category)}
              sx={{
                borderRadius: 1,
                mb: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              }}
            >
              <ListItemIcon>
                <FolderIcon color="primary" />
              </ListItemIcon>
              <ListItemText 
                primary={category}
                secondary={`${content.documents.length} document(s)`}
              />
              {expandedCategories.includes(category) ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </ListItem>
            <Collapse in={expandedCategories.includes(category)}>
              <List>
                {content.documents.map((doc: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ListItem
                      sx={{
                        borderRadius: 1,
                        ml: 2,
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                        }
                      }}
                    >
                      <ListItemIcon>
                        {getFileIcon(doc.type)}
                      </ListItemIcon>
                      <ListItemText
                        primary={doc.name}
                        secondary={`${doc.size} • Mis à jour le ${doc.date}`}
                      />
                      <Tooltip title="Télécharger">
                        <IconButton>
                          <DownloadIcon />
                        </IconButton>
                      </Tooltip>
                    </ListItem>
                  </motion.div>
                ))}
              </List>
            </Collapse>
          </>
        ) : (
          <>
            <ListItem
              button
              onClick={() => toggleCategory(category)}
              sx={{ 
                borderRadius: 1,
                backgroundColor: theme.palette.background.paper,
                mb: 1,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              }}
            >
              <ListItemIcon>
                <FolderIcon color="primary" />
              </ListItemIcon>
              <ListItemText primary={category} />
              {expandedCategories.includes(category) ? (
                <ExpandLessIcon />
              ) : (
                <ExpandMoreIcon />
              )}
            </ListItem>
            <Collapse in={expandedCategories.includes(category)}>
              <Box sx={{ ml: 2 }}>
                {renderDocuments(content, level + 1)}
              </Box>
            </Collapse>
          </>
        )}
      </Box>
    ));
  };

  return (
    <Box sx={{ py: 8, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 4,
              textAlign: 'center',
              fontWeight: 700,
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              backgroundClip: 'text',
              textFillColor: 'transparent',
            }}
          >
            Centre de Documentation
          </Typography>

          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 4,
              backgroundColor: 'background.paper',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            }}
          >
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
              <Button
                variant="contained"
                startIcon={<ZipIcon />}
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
                Télécharger tous les documents
              </Button>
            </Box>

            <List>
              {renderDocuments(documents)}
            </List>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Documentation; 