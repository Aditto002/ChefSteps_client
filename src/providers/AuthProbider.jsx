import React, { createContext } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebase.config"

const auth = getAuth(app)
export const AuthContext = createContext(null);
function AuthProbider({children}) {
    // const user =null;
    const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const signIn =(email,password) =>{
      return signInWithEmailAndPassword(auth,email,password);
    }

    const authInfo = {
      createUser,
      signIn
    }
  return (
    <AuthContext.Provider value= {authInfo}>
           {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider