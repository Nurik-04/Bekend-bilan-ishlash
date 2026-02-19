// import React from 'react'

// const HomePage = () => {
//   return (
//     <div>
//       <h1>HomePage</h1>
      
//     </div>
//   )
// }

// export default HomePage
// -------------------------------------
// import React from 'react'
// import { useNavigate } from 'react-router-dom'

// const HomePage = () => {
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     localStorage.removeItem("Token ;)")
//     navigate("/")
//   }

//   return (
//     <div className="min-h-screen bg-gray-100">
      
//       {/* Navbar */}
//       <nav className="bg-indigo-600 text-white px-8 py-4 flex justify-between items-center shadow-lg">
//         <h1 className="text-xl font-bold">My Dashboard</h1>
//         <button 
//           onClick={handleLogout}
//           className="bg-white text-indigo-600 px-4 py-1 rounded-lg font-semibold hover:bg-gray-200 transition"
//         >
//           Logout
//         </button>
//       </nav>

//       {/* Content */}
//       <div className="p-10 grid md:grid-cols-3 gap-6">
        
//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
//           <h2 className="text-lg font-bold mb-2">Profile</h2>
//           <p className="text-gray-600">Foydalanuvchi ma'lumotlari shu yerda chiqadi.</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
//           <h2 className="text-lg font-bold mb-2">Settings</h2>
//           <p className="text-gray-600">Sozlamalar sahifasi.</p>
//         </div>

//         <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
//           <h2 className="text-lg font-bold mb-2">Statistics</h2>
//           <p className="text-gray-600">Statistika ma'lumotlari joylashadi.</p>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default HomePage
// -------------------------------------------
import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("Token ;)");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-5 bg-white/5 backdrop-blur-xl border-b border-white/10">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="px-5 py-2 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg 
          hover:scale-110 hover:shadow-lg hover:shadow-red-500/40 
          active:scale-95 transition-all duration-300"
        >
          Logout
        </button>
      </nav>

      {/* Content */}
      <div className="p-10 grid md:grid-cols-3 gap-8">

        {["Profile", "Analytics", "Settings"].map((item, i) => (
          <div
            key={i}
            className="relative bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6
            hover:-translate-y-3 hover:shadow-2xl hover:shadow-purple-500/20
            transition-all duration-500 group cursor-pointer"
          >
            {/* Before glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>

            <h2 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition">
              {item}
            </h2>
            <p className="text-white/60 group-hover:text-white transition">
              Bu yerda {item} ma'lumotlari joylashadi.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
