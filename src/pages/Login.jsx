
import { useEffect, useState } from 'react';
import { signInWithPopup,signInWithRedirect, getRedirectResult } from 'firebase/auth';
import { auth, provider} from '../firebase'
import { replace, useNavigate } from 'react-router-dom';
import logo from '../assets/react.svg'

function App() {
   const navigate = useNavigate()

    useEffect(() => {
      const checkRedirectLogin = async () => {
      if (isLoggedIn === "true") {
        navigate("/Home", { replace: true });
        return;
      }

      try {
        const result = await getRedirectResult(auth);
       if (result) {
          const user = result.user;
          localStorage.setItem("isLoggedIn", "true");
          console.log("Redirect login:", user.displayName);
          navigate("/Home", { replace: true });
        }
      } catch (error) {
        console.error("Redirect login failed:", error);
      }
    };

    checkRedirectLogin();
  }, [navigate]);

   const isMobile = () => /iPhone|iPad|Android/i.test(navigator.userAgent);
   const handleGoogleLogin = async () => {
    try{
      if(isMobile()) {
        signInWithRedirect(auth, provider);
      } else {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        alert(`Logged in as ${user.displayName}`)
        localStorage.setItem('isLoggedIn', 'true')
        navigate('/Home', {replace: true}) 
      }
    } catch(error){
         console.error("Login in Failed")
    }
  }
  return (
    <>
     <div className='min-h-screen bg-black'>
       <button onClick={handleGoogleLogin} className='flex items-center gap-2 border border-gray-200 rounded px-4 py-4 relative top-96 bg-white hover:bg-gray-100 mx-auto'>
        <img className='w-5 h-5' src= {logo} alt="" />
        <span className='text-sm text-gray-700'>Continue with Google</span>
       </button>
     </div>
    </>
  )
}

export default App
