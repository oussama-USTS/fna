import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Box, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Home from './pages/Home';
import Articles from './components/Articles';
import Calendar from './components/Calendar';
import Admin from './pages/Admin';
import Organigramme from './components/Organigramme';
import ActionsSyndicales from './pages/dirigeant/ActionsSyndicales';
import ExpertiseEntreprise from './pages/expertise/ExpertiseEntreprise';
import ExpertiseJuridique from './pages/expertise/ExpertiseJuridique';
import VieFederale from './pages/dirigeant/VieFederale';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex' }}>
          <Header />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              backgroundColor: 'background.default',
              minHeight: '100vh',
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/organigramme" element={<Organigramme />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/admin" element={<Admin />} />

              {/* Routes Le Dirigeant */}
              <Route path="/actions-syndicales" element={<ActionsSyndicales />} />
              <Route path="/vie-federale" element={<VieFederale />} />

              {/* Routes Expertise */}
              <Route path="/expertise/entreprise" element={<ExpertiseEntreprise />} />
              <Route path="/expertise/juridique-fiscal" element={<ExpertiseJuridique />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
