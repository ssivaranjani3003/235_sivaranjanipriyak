import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import LoginForm from './component/LoginForm';
import SignUpPage from './component/SignUpPage';
import CGPA from './component/CGPA';
import ContactUs from './component/ContactUs';
import StudentDetails from './component/StudentDetails';
import Courses from './component/Courses';
import HamburgerMenu from './component/HamburgerMenu'; 
import Profile from './component/Profile'; 
import Feedback from './component/Feedback'; 
import Payment from './component/Payment';
import About from './component/About';
import PrivacyPolicy from './component/PrivacyPolicy';
function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
              
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/cgpa" element={<CGPA />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/StudentDetails" element={<StudentDetails/>}/>
                <Route path="/Courses" element={<Courses />} />
                <Route path="/HamburgerMenu" element={<HamburgerMenu />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/Feedback" element={<Feedback />} />
                <Route path="/About" element={<About />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
            
        </Router>
    );
}

export default App;

