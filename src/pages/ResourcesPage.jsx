import React from 'react';
import { Container, Typography, List, ListItem, Link } from '@mui/material';

function ResourcesPage() {
  return (
    <Container maxWidth="md">
      <Typography variant="h2" gutterBottom>
        Resources
      </Typography>
      <List>
        {/* Map through an array of resources here */}
        <ListItem>
          <Link href="#" target="_blank" rel="noopener">
            Resource Link 1
          </Link>
        </ListItem>
        {/* Additional resource items */}
      </List>
    </Container>
  );
}

export default ResourcesPage;
