import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false); // To toggle between forms

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (event) => {
    event.preventDefault();

    let isValid = true;

    // Validate email
    if (!email) {
      setEmailError('Email Address is required');
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError('Enter a valid email address');
      isValid = false;
    } else {
      setEmailError('');
    }

    // Validate password (only for login)
    if (!forgotPassword && !password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (!forgotPassword && password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      isValid = false;
    } else {
      setPasswordError('');
    }

    if (isValid) {
      if (forgotPassword) {
        // Handle forgot password form submission
        alert('Password reset link has been sent to your email!');
      } else {
        // Handle successful login form submission
        alert('Login successful!');
      }
    }
  };

  const toggleForm = () => {
    setForgotPassword((prev) => !prev);
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <div>
      <Box component="section">
        <div style={{ textAlign: 'center' }}>
          <Typography variant="h4" style={{ color: 'black', paddingBottom: '30px' }}>
            {forgotPassword ? 'Forgot Password' : 'Login'}
          </Typography>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: '500px' }}
            error={!!emailError}
            helperText={emailError}
            autoComplete='off'
          />
          <br /><br />
          {!forgotPassword && (
            <>
              <TextField
                id="password"
                name="password"
                type="password"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ width: '500px' }}
                error={!!passwordError}
                helperText={passwordError}

              />
              <br /><br />
            </>
          )}
          <Button variant="contained" style={{ width: '500px' }} onClick={handleSubmit}>
            {forgotPassword ? 'Reset Password' : 'Sign in'}
          </Button>
          <br /><br />
          <Link href="#" onClick={toggleForm}>
            {forgotPassword ? 'Back to Login' : 'Forgot Password?'}
          </Link>
        </div>
      </Box>
    </div>
  );
}

export default LoginForm;
