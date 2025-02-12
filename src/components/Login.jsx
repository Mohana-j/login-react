import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (username === "student" && password === "password") {
            navigate("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white bg-opacity-10 backdrop-blur-md p-6 rounded-lg shadow-lg w-80 border border-white border-opacity-20">
                <h2 className="text-2xl font-semibold mb-4 text-white text-center">Student Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded mb-3 focus:ring-2 focus:ring-purple-400"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded mb-3 focus:ring-2 focus:ring-purple-400"
                />
                <button
                    onClick={handleLogin}
                    className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-700 transition-transform transform hover:scale-105"
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default Login;
