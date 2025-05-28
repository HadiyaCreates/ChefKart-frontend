// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     const res = await fetch("http://localhost:8000/api/auth/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await res.json();
//     if (res.ok) {
//       alert("Login successful!");
//       navigate("/dashboard");
//     } else {
//       alert(data.message);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="space-y-4">
//         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} className="border p-2" />
//         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} className="border p-2" />
//         <button onClick={handleLogin} className="bg-orange-500 text-white px-4 py-2">Login</button>
//         <p>Don't have an account? <span onClick={() => navigate("/signup")} className="text-blue-500 cursor-pointer">Signup</span></p>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login successful!");
      // Optionally store token or user info
      // localStorage.setItem("token", data.token);
      // localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/");
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#fff3e0] flex items-center justify-center">
      <div className="w-[380px] rounded-2xl overflow-hidden shadow-xl bg-white">
        {/* Header */}
        <div className="bg-[#002366] px-6 pt-8 pb-20 rounded-b-[60px] text-white relative">
          <h1 className="text-2xl font-bold mt-2">Log in</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3132/3132693.png"
            alt="pizza"
            className="absolute top-10 right-4 w-20"
          />
        </div>

        {/* Form */}
        <div className="px-6 py-8 space-y-5">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Your email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 mb-1 block">
              Your password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right mt-1">
              <span className="text-xs text-blue-600 font-medium cursor-pointer">
                Forgot password?
              </span>
            </div>
          </div>

          <button
            onClick={handleLogin}
            className="w-full bg-[#002366] hover:bg-[#001f4d] text-white font-semibold py-3 rounded-full flex justify-center items-center text-lg shadow-md"
          >
            Log in
            <span className="ml-2 text-xl">&rarr;</span>
          </button>

          <div className="text-center pt-4 text-sm">
            Don’t have an account?{" "}
            <span
              className="text-blue-600 font-semibold cursor-pointer"
              onClick={() => navigate("/signup")}
            >
              Register!
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
