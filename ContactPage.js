import React from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

function ContactPage() {
  return (
    <Box sx={{ p: 3 }}>
      <h2>Contact Us</h2>
      <TableContainer component={Paper}>
        <Table aria-label="contact table">
          <TableHead>
            <TableRow>
              <TableCell>Department</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Admissions</TableCell>
              <TableCell>admissions@scholarhub.com</TableCell>
              <TableCell>(123) 456-7890</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Support</TableCell>
              <TableCell>support@scholarhub.com</TableCell>
              <TableCell>(123) 456-7891</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>General Inquiries</TableCell>
              <TableCell>info@scholarhub.com</TableCell>
              <TableCell>(123) 456-7892</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ContactPage;