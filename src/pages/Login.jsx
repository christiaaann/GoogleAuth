
import { useEffect, useState } from 'react';
import { signInWithPopup,signInWithRedirect, getRedirectResult, } from 'firebase/auth';
import { auth, provider} from '../firebase'
import { replace, useNavigate } from 'react-router-dom';
import logo from '../assets/google.svg'
import { onAuthStateChanged } from 'firebase/auth';
function App() {
   const navigate = useNavigate()

  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/Home", { replace: true });
    } else {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          localStorage.setItem("isLoggedIn", "true");
          navigate("/Home", { replace: true });
        }
      } catch (error) {
        console.error("Redirect login failed:", error);
      }
    }
  });

  return () => unsubscribe();
}, [navigate]);

   const isMobile = () => /iPhone|iPad|Android/i.test(navigator.userAgent);
   
   const handleGoogleLogin = async () => {
    try{
      if(isMobile()) {
       await signInWithRedirect(auth, provider);
      } else {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        alert(`Logged in as ${user.displayName}`);
        localStorage.setItem('isLoggedIn', 'true');
        navigate('/Home', {replace: true}); 
      }
    } catch(error){
         console.error("Login in Failed");
    }
  }
  return (
    <>
     <div className='min-h-screen bg-black flex justify-center '>
       <button onClick={handleGoogleLogin} className=" fixed bottom-96  group  inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-neutral-950 px-6 font-medium text-neutral-200"><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative h-full w-8 bg-white/20"></div></div>
        <img className='w-5 h-5 right-2 relative' src= {logo} alt="" />
        <span className='text-sm  text-white'>Continue with Google</span>
       </button>
     </div>

     
    </>
  )
}

export default App
