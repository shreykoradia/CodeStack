import React from 'react'
import Homepage from './component/HomePage/Homepage'
import { Route , Routes ,  } from 'react-router-dom'
import Login from './component/Login/Login.jsx'
function App() {
    return (
        <div>
                <Routes>
                    <Route path = "/" element={<Homepage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup"  element={<Login />} />
                </Routes>
        </div>
    )
}

export default App
