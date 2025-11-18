import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'; // Import the CSS file

const SignUp = () => {
    const [formData, setFormData] = useState({ username: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_EC2_IP}/api/auth/signup`, formData); 
            alert('User created!');
            navigate('/signin');
        } catch (error) {
            console.error(error);
            alert('Error creating user');
        }
    };

    return (
        <div className="signup-container">
            <h2 className="signup-heading">Sign Up</h2>
            <form className="signup-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    placeholder="Username" 
                    onChange={handleChange} 
                    required 
                    className="signup-input"
                />
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    onChange={handleChange} 
                    required 
                    className="signup-input"
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    onChange={handleChange} 
                    required 
                    className="signup-input"
                />
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default SignUp;
