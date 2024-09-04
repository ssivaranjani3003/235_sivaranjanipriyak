import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function SignUpPage() {
    // State to manage form values and errors
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        registerNo: '',
        gender: '',
        mobileNumber: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        age: '',
        registerNo: '',
        gender: '',
        mobileNumber: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        location: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // Handle input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [id]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate form fields
        const newErrors = {
            name: formData.name ? '' : 'Name is required',
            age: formData.age ? '' : 'Age is required',
            registerNo: formData.registerNo ? '' : 'Register Number is required',
            gender: formData.gender ? '' : 'Gender is required',
            mobileNumber: formData.mobileNumber ? '' : 'Mobile Number is required',
            firstName: formData.firstName ? '' : 'First Name is required',
            lastName: formData.lastName ? '' : 'Last Name is required',
            phoneNumber: formData.phoneNumber ? '' : 'Phone Number is required',
            location: formData.location ? '' : 'Location is required',
            email: formData.email ? '' : 'Email is required',
            password: formData.password ? '' : 'Password is required',
            confirmPassword: formData.confirmPassword ? '' : 'Confirm Password is required',
        };

        // Validate email
        if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
        }

        // Validate password
        if (formData.password && formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters long';
        }

        // Validate confirm password
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        setErrors(newErrors);

        // Check if there are any validation errors
        if (Object.values(newErrors).some(error => error)) {
            return; // If there are errors, do not proceed
        }

        // Handle successful form submission
        alert('Sign up is successful!');

        // Optionally, reset form fields and errors
        setFormData({
            name: '',
            age: '',
            registerNo: '',
            gender: '',
            mobileNumber: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            location: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
        setErrors({
            name: '',
            age: '',
            registerNo: '',
            gender: '',
            mobileNumber: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            location: '',
            email: '',
            password: '',
            confirmPassword: '',
        });
    };

    return (
        <div>
            <Box component="section">
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h1" style={styles.typo}>
                        Signup
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            id="name"
                            label="Name"
                            style={styles.textField}
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                        />
                        <br /><br />
                        <TextField
                            id="age"
                            label="Age"
                            style={styles.text}
                            value={formData.age}
                            onChange={handleChange}
                            error={!!errors.age}
                            helperText={errors.age}
                        />
                      
                        
                        <TextField
                            id="gender"
                            label="Gender"
                            style={styles.text}
                            value={formData.gender}
                            onChange={handleChange}
                            error={!!errors.gender}
                            helperText={errors.gender}
                        />
                        <br/><br/><TextField
                        id="registerNo"
                        label="Register Number"
                        style={styles.textField}
                        value={formData.registerNo}
                        onChange={handleChange}
                        error={!!errors.registerNo}
                        helperText={errors.registerNo}
                    />
                    <br /><br />
                        <br /><br />
                        <TextField
                            id="mobileNumber"
                            label="Mobile Number"
                            style={styles.textField}
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            error={!!errors.mobileNumber}
                            helperText={errors.mobileNumber}
                        />
                        <br /><br />
                        
                        <TextField
                            id="email"
                            label="Email"
                            type="email"
                            style={styles.textField}
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                        />
                        <br /><br />
                        <TextField
                            id="password"
                            label="Password"
                            type="password"
                            style={styles.text}
                            value={formData.password}
                            onChange={handleChange}
                            error={!!errors.password}
                            helperText={errors.password}
                        />
                        <TextField
                            id="confirmPassword"
                            label="Confirm Password"
                            type="password"
                            style={styles.text}
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            error={!!errors.confirmPassword}
                            helperText={errors.confirmPassword}
                        />
                        <br /><br />
                        <TextField
                            id="phoneNumber"
                            label="Phone Number"
                            style={styles.textField}
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            error={!!errors.phoneNumber}
                            helperText={errors.phoneNumber}
                        />
                        <br /><br />
                        
                        <Button type="submit" variant="contained">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </Box>
        </div>
    );
}

const styles = {
    text: {
        padding: '10px',
        width: '200px'
    },
    textField: {
        width: '420px',
    },
    typo: {
        color: 'black',
        paddingBottom: '30px',
    },
};

export default SignUpPage;
