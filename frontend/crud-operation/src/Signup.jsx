import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

export const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    // Regular expression for basic email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "email") {
            if (!emailRegex.test(value)) {
                setEmailError("Invalid email address.");
            } else {
                setEmailError("");
            }
        }

        if (name === "password" || name === "confirmPassword") {
            setPasswordError("");
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

    
        if (!emailRegex.test(formData.email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setPasswordError("Passwords do not match!");
            return;
        }

        try {
          
            setEmailError("");
            setPasswordError("");
            const response = await axios.post("http://localhost:5000/api/users/signup", formData);

            const { token, message } = response.data;
    
            // Store the token in localStorage
            localStorage.setItem("token", token);
    
            alert(message || "Signup successful!");
        
            navigate("/");
        } catch (err) {
            const errorMessage = err.response?.data?.message || "Error signing up";
            setPasswordError(errorMessage);
        }
    };
    return (
        <div className="main-section">
            <h1>Sign Up</h1>
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
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                <input
                    type="password"
                    name="password"
                    required
                    minLength="6"
                    placeholder="New Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{
                        borderColor: passwordError ? "red" : "",
                    }}
                />
                <input
                    type="password"
                    name="confirmPassword"
                    required
                    minLength="6"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={{
                        borderColor: passwordError ? "red" : "",
                    }}
                />
                {passwordError && <p style={{ color: "red", marginTop: "-10px" }}>{passwordError}</p>}
                <button type="submit">Sign Up</button>
                <div className="have-an-account">
                    <p>Already have an account?</p>
                    <NavLink to="/">Login</NavLink>
                </div>
            </form>
        </div>
    );
};

export default Signup;
