import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid } from '@mui/material';

function ContactPage() {
  const [contact, setContact] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement the logic to handle form submission, like sending an email
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Name" 
              name="name" 
              variant="outlined" 
              value={contact.name} 
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Email" 
              name="email" 
              variant="outlined" 
              value={contact.email} 
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              fullWidth 
              label="Message" 
              name="message" 
              variant="outlined" 
              multiline 
              rows={4} 
              value={contact.message} 
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Send Message
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ContactPage;
