import React,{useContext ,useState , useEffect} from 'react'
import {auth} from '../firebase'
const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children}) {

    const [currentUser, setCurrentUser ] = useState()

    function signup(email , password){
        return auth.createUserwithEmailAndPassword(email , password)
    }

    useEffect(()=>{
      const unsubscribe =  auth.onAuthStateChaged( user =>{
            setCurrentUser(user)
        })

        return unsubscribe 
    }, [])
   

    const value ={
        currentUser ,
        signup
    }
    return (
        <AuthContext value={value}>
            {children}
        </AuthContext>
    )
}
