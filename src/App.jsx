import './styles/main.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';

import Home from './pages/home/home';
import About from './pages/about/about';
import Students from './pages/students/students';
import Recrutation from './pages/recrutation/recrutation';
import NotFound from "./pages/not-found/not-found";

import ScrollToTop from "./utils/ScrollToTop";

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <Navbar />

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/o-szkole' element={<About/>} />
                <Route path='/dla-uczniow' element={<Students/>} />
                <Route path='/rekrutacja' element={<Recrutation/>} />
                <Route path='*' element={<NotFound/>} />
            </Routes>

            <Footer/>
        </Router>
    )
}

export default App;
