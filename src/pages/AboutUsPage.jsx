import React from 'react';
import { Container, Typography } from '@mui/material';

function AboutUsPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5" paragraph>
        Our mission is to provide support and resources for individuals struggling with addiction.
      </Typography>
      {/* Additional sections about the team, history, etc. */}
    </Container>
  );
}

export default AboutUsPage;
