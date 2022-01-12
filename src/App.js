import React from 'react'
import Homepage from './component/HomePage/Homepage'
import { Route , Routes ,  } from 'react-router-dom'
import Login from './component/Login/Login'
function App() {
    return (
        <div>
                <Routes>
                <Route path = "/" exact element={<Homepage />} />
                    <Route path="/login" exact element={<Login />} />
                </Routes>
        </div>
    )
}

export default App
