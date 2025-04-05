import { useState } from 'react'
import './styles/main.scss'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './pages/home/home';

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Router>
                <Navbar />

                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </Router>
        </>
    )
}

export default App;
