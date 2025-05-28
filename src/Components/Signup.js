// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     const res = await fetch("http://localhost:8000/auth/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ name, email, password }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert("Signup successful!");
//       navigate("/login");
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="space-y-4">
//         <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} className="border p-2" />
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2" />
//         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2" />
//         <button onClick={handleSignup} className="bg-orange-500 text-white px-4 py-2">Signup</button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const res = await fetch("http://localhost:8000/auth/signup", {
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
    <div className="min-h-screen bg-[#fff3e0] flex items-center justify-center">
      <div className="w-[380px] rounded-2xl overflow-hidden shadow-xl bg-white">
        {/* Header */}
        <div className="bg-[#002366] px-6 py-8 rounded-b-[40px] text-white relative">
          <h2 className="text-lg font-semibold">&lt; Register</h2>
          <h1 className="text-2xl font-bold mt-2">Create a account</h1>
          {/* Decorative tomato */}
          <div className="absolute top-4 right-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="burger"
              className="w-16"
            />
          </div>
        </div>

        {/* Form */}
        <div className="px-6 py-8 space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Register Button */}
          <button
            onClick={handleSignup}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-full flex justify-center items-center"
          >
            Register
            <span className="ml-2">&rarr;</span>
          </button>

          {/* Already have account */}
          <div className="text-center pt-4 text-sm">
            Already have an account?{" "}
            <span
              className="text-blue-600 font-semibold cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Log in!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
