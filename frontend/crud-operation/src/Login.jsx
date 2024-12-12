import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

export const Login = () => {
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const navigate = useNavigate(); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post("http://localhost:5000/api/users/login", formData);
            navigate("/UserData"); 
        } catch (err) {
            setError(err.response?.data?.message || "Error logging in");
        }
    };
    return (
        <div className="main-section" >
            <h1>Login</h1>
            <form className="form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="username"
                    required
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
                <a className="back" href="/SignUp">Go Back</a>
            </form>
        </div>
    );
};

export default Login;
