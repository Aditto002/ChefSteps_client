import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"

const auth = getAuth(app)
export const AuthContext = createContext(null);
function AuthProbider({children}) {
    // const user =null;
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth,email,password);
    }
    
    const signIn =(email,password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth,email,password);
    }
    const logOut = ()=>{
      return signOut(auth)
    }

    useEffect(()=>{
    const unsubscribe=  onAuthStateChanged(auth, loggedUser=>{
        console.log("logged in user ",loggedUser)
        setUser(loggedUser);
        setLoading(false);
      })
      return ()=>{
        unsubscribe();
      }
    })

    const authInfo = {
      createUser,
      signIn,user,logOut,loading
    }
  return (
    <AuthContext.Provider value= {authInfo}>
           {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider