import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to My Brothers Keeper
      </Typography>
      <Typography variant="h5" align="center" paragraph>
        Helping those struggling with addiction find the support they need.
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Button variant="contained" color="primary" onClick={navigateToAbout}>
          Learn More
        </Button>
      </div>
      {/* Additional content can be placed here */}
    </Container>
  );
}

export default HomePage;
