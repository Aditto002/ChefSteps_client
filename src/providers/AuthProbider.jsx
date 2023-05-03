import React, { createContext } from 'react'
import { getAuth } from "firebase/auth";
import app from "../firebase/firebase.config"

const auth = getAuth(app)
export const AuthContext = createContext(null);
function AuthProbider({children}) {
    // const user ={displayName : "Aditto"}
    const authInfo = {
        // user
    }
  return (
    <AuthContext.Provider value= {authInfo}>
           {children}
    </AuthContext.Provider>
  )
}

export default AuthProbider