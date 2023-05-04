import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config"
import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const gitprovider = new GithubAuthProvider();
function AuthProbider({children}) {
    // const user =null;
    const [user,setUser] =useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) =>{
      setLoading(true);
     
      return createUserWithEmailAndPassword(auth,email,password);
    }
    
   const gitLogin =()=>{
     return signInWithPopup(auth, gitprovider)
   }



   const googleLogIn =()=>{
     return signInWithPopup(auth, provider);
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
      signIn,user,logOut,loading,googleLogIn,gitLogin
    }
  return (
    <AuthContext.Provider value= {authInfo}>
           {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider