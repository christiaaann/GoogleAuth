import { signInWithPopup, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useState } from "react";



function Home() {
  const [modal, setshowmodal] = useState(false);
   const navigate = useNavigate();
 
  
   const handleLogout = () => {
   signOut(auth)
   .then (() => {
   alert('Logout Successful');
    
   const user = result.user;
   localStorage.removeItem('isLoggedIn');
   navigate('/', {replace: true});
   
   localStorage.setItem ("displayName",user.displayName)
   })
   .catch((error) =>{
   });
}
   return (
   <>
   {!modal && (
   <div className="bg-green-600 mt-24 max-w-96 p-64 mx-auto rounded">
   <h1 className="text-white  text-lg relative bottom-52 right-12 font-bold">Welcome: {}</h1>
   <button onClick={() => setshowmodal(true)} className="hover:bg-orange-400 hover:text-white relative top-52 right-10 bg-gray-300 px-6 py-2 rounded-lg font-bold ">Logout</button>
   </div>
   )}

   {modal && (
   <div className="bg-orange-200 p-56 max-w-72 mx-auto rounded mt-36  ">
    <p className="text-nowrap relative right-36 bottom-28 font-bold text-xl ">Are you sure you want to logout?</p>
     <div className="flex justify-center gap-4">
       <button onClick={() => setshowmodal(false)} className="bg-green-400 px-4 rounded-md hover:bg-red-600 hover:text-white">Cancel</button>
       <button onClick={handleLogout} className="bg-yellow-200 px-4 py-2 rounded font-bold">Continue</button>
     </div>
   </div>
)}
   </>
    
   )
}

export default Home;