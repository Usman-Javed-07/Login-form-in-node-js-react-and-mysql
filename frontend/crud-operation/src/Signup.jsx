

import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
 
export const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        try {
            setError(""); // Clear previous errors
            await axios.post("http://localhost:5000/api/users/signup", formData);
            alert("Signup successful!");
        } catch (err) {
            setError(err.response?.data?.message || "Error signing up");
        }
    };

    return (
        <div className="main-section">
            <h1>SignUp</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    required
                    minLength="3"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    required
                    minLength="6"
                    placeholder="New Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    required
                    minLength="6"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                <button type="submit">SignUp</button>
                {error && <p className="error">{error}</p>}
                <div className="have-an-account">
                    <p>Already have an account?</p>
                    <NavLink to ="/">Login</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Signup;  
