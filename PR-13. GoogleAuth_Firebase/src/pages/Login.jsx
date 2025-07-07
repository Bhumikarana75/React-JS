import React from 'react'
import { auth, googleAuthProvider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

const login = () => {

    const handleLogin = async() => {
        try{
            let user = await signInWithPopup(auth, googleAuthProvider);
            console.log(user);
            
        }catch(err){
            console.log(err);
            return false;
        }

    }

  return (
    <div align="center">
        <h2>Google Authentication</h2>
    
        <button onClick={ () => handleLogin() }>Google</button>

    </div>
  )
}

export default login