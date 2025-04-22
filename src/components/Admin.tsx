import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Chip,
  Avatar,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { motion } from 'framer-motion';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SecurityIcon from '@mui/icons-material/Security';
import GroupIcon from '@mui/icons-material/Group';
import ArticleIcon from '@mui/icons-material/Article';

// Exemple de données utilisateurs
const users = [
  {
    id: 1,
    name: 'Thomas Martin',
    email: 'thomas.martin@fna.fr',
    role: 'Administrateur',
    regions: ['NNE', 'NO'],
    categories: ['Toute l\'entreprise', 'Communication'],
    lastLogin: '2024-03-20 14:30',
    status: 'Actif'
  },
  {
    id: 2,
    name: 'Marie Laurent',
    email: 'marie.laurent@fna.fr',
    role: 'Contributeur',
    regions: ['NCE'],
    categories: ['Expertise', 'Communication'],
    lastLogin: '2024-03-19 16:45',
    status: 'Actif'
  },
  {
    id: 3,
    name: 'Pierre Dubois',
    email: 'pierre.dubois@fna.fr',
    role: 'Visiteur',
    regions: ['NPM'],
    categories: ['Le Métier', 'Expertise'],
    lastLogin: '2024-03-18 09:15',
    status: 'Inactif'
  }
];

const regions = ['NNE', 'NO', 'NCE', 'NPM', 'NACA', 'Sans Région', 'DROM'];
const categories = ['Toute l\'entreprise', 'Communication', 'Expertise', 'Le Métier'];
const roles = ['Administrateur', 'Contributeur', 'Visiteur'];

const Admin = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleOpenDialog = (user: any = null) => {
    if (user) {
      setSelectedUser(user);
      setSelectedRegions(user.regions);
      setSelectedCategories(user.categories);
    } else {
      setSelectedUser(null);
      setSelectedRegions([]);
      setSelectedCategories([]);
    }
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedUser(null);
    setSelectedRegions([]);
    setSelectedCategories([]);
  };

  const handleSave = () => {
    // Logique de sauvegarde
    handleCloseDialog();
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Administrateur':
        return 'error';
      case 'Contributeur':
        return 'primary';
      default:
        return 'default';
    }
  };

  const getStatusColor = (status: string) => {
    return status === 'Actif' ? 'success' : 'error';
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
            Administration
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
            <Button
              variant="contained"
              startIcon={<PersonAddIcon />}
              onClick={() => handleOpenDialog()}
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
              Ajouter un utilisateur
            </Button>
          </Box>

          <Paper
            elevation={0}
            sx={{
              borderRadius: 4,
              overflow: 'hidden',
              boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            }}
          >
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Utilisateur</TableCell>
                    <TableCell>Rôle</TableCell>
                    <TableCell>Régions</TableCell>
                    <TableCell>Catégories</TableCell>
                    <TableCell>Dernière connexion</TableCell>
                    <TableCell>Statut</TableCell>
                    <TableCell>Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                          <Avatar>{user.name.charAt(0)}</Avatar>
                          <Box>
                            <Typography variant="subtitle2">{user.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {user.email}
                            </Typography>
                          </Box>
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Chip
                          label={user.role}
                          color={getRoleColor(user.role)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                          {user.regions.map((region) => (
                            <Chip
                              key={region}
                              label={region}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </TableCell>
                      <TableCell>
                        <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                          {user.categories.map((category) => (
                            <Chip
                              key={category}
                              label={category}
                              size="small"
                              variant="outlined"
                            />
                          ))}
                        </Box>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <Chip
                          label={user.status}
                          color={getStatusColor(user.status)}
                          size="small"
                        />
                      </TableCell>
                      <TableCell>
                        <Tooltip title="Modifier">
                          <IconButton
                            size="small"
                            onClick={() => handleOpenDialog(user)}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Supprimer">
                          <IconButton size="small" color="error">
                            <DeleteIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>

          <Dialog open={openDialog} onClose={handleCloseDialog} maxWidth="sm" fullWidth>
            <DialogTitle>
              {selectedUser ? 'Modifier l\'utilisateur' : 'Nouvel utilisateur'}
            </DialogTitle>
            <DialogContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
                <TextField
                  label="Nom complet"
                  fullWidth
                  defaultValue={selectedUser?.name}
                />
                <TextField
                  label="Email"
                  fullWidth
                  defaultValue={selectedUser?.email}
                />
                <FormControl fullWidth>
                  <InputLabel>Rôle</InputLabel>
                  <Select
                    defaultValue={selectedUser?.role || ''}
                    label="Rôle"
                  >
                    {roles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Régions</InputLabel>
                  <Select
                    multiple
                    value={selectedRegions}
                    onChange={(e) => setSelectedRegions(e.target.value as string[])}
                    input={<OutlinedInput label="Régions" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}
                  >
                    {regions.map((region) => (
                      <MenuItem key={region} value={region}>
                        <Checkbox checked={selectedRegions.indexOf(region) > -1} />
                        <ListItemText primary={region} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>Catégories</InputLabel>
                  <Select
                    multiple
                    value={selectedCategories}
                    onChange={(e) => setSelectedCategories(e.target.value as string[])}
                    input={<OutlinedInput label="Catégories" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} size="small" />
                        ))}
                      </Box>
                    )}
                  >
                    {categories.map((category) => (
                      <MenuItem key={category} value={category}>
                        <Checkbox checked={selectedCategories.indexOf(category) > -1} />
                        <ListItemText primary={category} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCloseDialog}>Annuler</Button>
              <Button onClick={handleSave} variant="contained">
                Enregistrer
              </Button>
            </DialogActions>
          </Dialog>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Admin; 