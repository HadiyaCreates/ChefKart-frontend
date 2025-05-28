import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await fetch("http://localhost:8000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      alert("Signup successful!");
      navigate("/login");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="space-y-4">
        <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="border p-2" />
        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2" />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2" />
        <button onClick={handleSignup} className="bg-orange-500 text-white px-4 py-2">Signup</button>
      </div>
    </div>
  );
}
