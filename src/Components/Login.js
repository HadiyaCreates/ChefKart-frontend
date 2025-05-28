import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2" />
        <button onClick={handleLogin} className="bg-orange-500 text-white px-4 py-2">Login</button>
        <p>Don't have an account? <span onClick={() => navigate("/signup")} className="text-blue-500 cursor-pointer">Signup</span></p>
      </div>
    </div>
  );
}
