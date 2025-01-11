import React, { createContext, useContext, useState } from 'react'

const Authcontext = createContext(null)
export const useAuth = () => {return useContext(Authcontext)};

export const AuthProvider = ({children}) => {
   
   const [user, setUser] = useState(null);
  
   const login=({username,password}) =>{
    if(username==='admin' && password ==='portal'){
      setUser({username,role:'MainOwner'})
    }
    else if (username!=='admin'&& password==='portal')
    setUser({username,role:'Client'})
   
   else {
    setUser(null); // Clear user in case of invalid credentials
}
}
   const logout=() =>{
    setUser(null)
   }

  return <Authcontext.Provider value={{user,login,logout}}>{children}</Authcontext.Provider>
}

