// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('')
//   const navigete = useNavigate()

//   const handleSubmit = async(e)=>{
//     e.preventDefault();
//     console.log(number, password);//--------------
    
//     try{
//       const res = await fetch("https://autozoom.limsa.uz/api/auth/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"  
//         },
//         body: JSON.stringify({
//           phone_number: number,
//           password: password
//         })
//       });
//       const data = await res.json()
//       console.log(data);   //-------------

//       if(!res.ok){
//         alert("Nimadir xato qayta korib chiq")
//         return
//       }

//       const token = data?.data?.tokens.accessToken.token;
//       console.log(token); //----------------
      
//       localStorage.setItem("Token ;)", token);

//       navigete("/home")
      
//     }catch(err){
//       alert("Error Xatolik")
//     }

//   }
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input 
//           type="text"
//           required
//           value={number}
//           onChange={(e) => setNumber(e.target.value)}
//           placeholder='991234567'
//         />
//         <input 
//           type="text"
//           required
//           value={password}
//           onChange={(e)=>setPassword(e.target.value)}
//           placeholder='superadmin'
//         />
//         <button type='submit'>Yuborish</button>
//       </form>
//     </div>
//   )
// }

// export default LoginPage
// ------------------------------------------------------------------------------
// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const LoginPage = () => {
//   const [number, setNumber] = useState('');
//   const [password, setPassword] = useState('')
//   const navigate = useNavigate()

//   const handleSubmit = async(e)=>{
//     e.preventDefault();

//     try{
//       const res = await fetch("https://autozoom.limsa.uz/api/auth/signin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"  
//         },
//         body: JSON.stringify({
//           phone_number: number,
//           password: password
//         })
//       });

//       const data = await res.json()

//       if(!res.ok){
//         alert("Nimadir xato qayta ko‘rib chiqing")
//         return
//       }

//       const token = data?.data?.tokens.accessToken.token;
//       localStorage.setItem("Token ;)", token);

//       navigate("/home")
      
//     }catch(err){
//       alert("Error Xatolik")
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
//       <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
//         <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
//           Login
//         </h2>

//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-600">
//               Telefon raqam
//             </label>
//             <input 
//               type="text"
//               required
//               value={number}
//               onChange={(e) => setNumber(e.target.value)}
//               placeholder='991234567'
//               className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             />
//           </div>

//           <div>
//             <label className="block mb-2 text-sm font-medium text-gray-600">
//               Parol
//             </label>
//             <input 
//               type="password"
//               required
//               value={password}
//               onChange={(e)=>setPassword(e.target.value)}
//               placeholder='********'
//               className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition"
//             />
//           </div>

//           <button 
//             type='submit'
//             className="w-full bg-indigo-600 text-white py-2 rounded-xl hover:bg-indigo-700 transition duration-300 font-semibold"
//           >
//             Kirish
//           </button>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default LoginPage
// ----------------------------------------------------------
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://autozoom.limsa.uz/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone_number: number,
          password: password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Login yoki parol noto‘g‘ri");
        return;
      }

      const token = data?.data?.tokens.accessToken.token;
      localStorage.setItem("Token ;)", token);
      navigate("/home");
    } catch (err) {
      alert("Serverda xatolik");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black relative overflow-hidden">
      
      {/* Animated background blur circles */}
      <div className="absolute w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-30 top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-indigo-500 rounded-full blur-3xl opacity-30 bottom-10 right-10 animate-pulse"></div>

      {/* Glass Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl p-10 w-full max-w-md text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-purple-500/40">
        
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          Welcome Back
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Phone Input */}
          <div className="relative group">
            <input
              type="text"
              required
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              placeholder=" "
              className="peer w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
            />
            <label className="absolute left-4 top-3 text-white/60 text-sm transition-all 
              peer-placeholder-shown:top-3 
              peer-placeholder-shown:text-base 
              peer-focus:-top-3 
              peer-focus:text-sm 
              peer-focus:text-purple-400">
              Telefon raqam
            </label>
          </div>

          {/* Password Input */}
          <div className="relative group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder=" "
              className="peer w-full px-4 py-3 bg-white/10 border border-white/30 rounded-xl outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
            />
            <label className="absolute left-4 top-3 text-white/60 text-sm transition-all 
              peer-placeholder-shown:top-3 
              peer-placeholder-shown:text-base 
              peer-focus:-top-3 
              peer-focus:text-sm 
              peer-focus:text-indigo-400">
              Parol
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="relative w-full py-3 rounded-xl font-semibold overflow-hidden group
              bg-gradient-to-r from-purple-500 to-indigo-500
              hover:from-indigo-500 hover:to-purple-500
              active:scale-95 transition-all duration-300"
          >
            <span className="relative z-10">Kirish</span>

            {/* Shine effect */}
            <span className="absolute top-0 left-[-100%] w-full h-full bg-white/20 skew-x-12 group-hover:left-[120%] transition-all duration-700"></span>
          </button>
        </form>

        {/* Extra info */}
        <p className="text-center text-sm text-white/60 mt-6 hover:text-white transition">
          Secure Admin Panel Access
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
