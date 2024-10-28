import React from 'react';
import { Container, Typography, Box } from '@mui/material';

function Home() {
  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" gutterBottom>
          Welcome to the Home Page
        </Typography>
        <Typography variant="body1">
          This is the home page. You can add more content here.
        </Typography>
      </Box>
    </Container>
  );
}

export default Home;
