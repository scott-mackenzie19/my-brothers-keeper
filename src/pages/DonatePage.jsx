import React from 'react';
import { Container, Typography, Button } from '@mui/material';

function DonatePage() {
  const handleDonation = () => {
    // Implement the logic for donation, e.g., redirecting to a payment gateway
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Donate
      </Typography>
      <Typography variant="h5" paragraph>
        Your support makes a difference in the fight against addiction.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleDonation}>
        Donate Now
      </Button>
      At 'My Brothers Keeper,' we are deeply committed to making a real difference in the lives of those battling addiction. We proudly assure our donors that 100% of your contributions are directed towards crucial programs and services that offer direct assistance to individuals in need. Your generosity becomes the lifeline for many, funding essential resources like recovery support, educational materials, and outreach programs. It enables us to extend our helping hand wider and more effectively, offering hope and practical aid. Every donation, no matter the size, contributes to saving lives and fostering recovery in a tangible, impactful way. Together, we can create a community of support and a network of hope for those struggling with addiction.
    </Container>
  );
}

export default DonatePage;
