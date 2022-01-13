import React from 'react'
import Homepage from './component/HomePage/Homepage'
import { Route , Routes ,  } from 'react-router-dom'
import Login from './component/Login/Login.jsx'
import Signup from './component/Signup/Signup.jsx'
function App() {
    return (
        <div>
                <Routes>
                    <Route path = "/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup"  element={<Signup />} />
                </Routes>
        </div>
    )
}

export default App
