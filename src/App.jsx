import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScreenPreApp from "./pages/ScreenPreApp";
import Tela4 from "./pages/Tela4";
import Tela5 from "./pages/Tela5";
import Tela6 from "./pages/Tela6";
import Login from "./pages/Login";
import Register from "./pages/Register";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ScreenPreApp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/4" element={<Tela4 />} /> 
                <Route path="/5" element={<Tela5 />} />
                <Route path="/6" element={<Tela6 />} />
                 
            </Routes>
        </BrowserRouter>
    )

    };
   