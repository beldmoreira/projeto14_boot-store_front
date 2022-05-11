import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScreenPreApp from "./pages/ScreenPreApp";
import Login from "./pages/Login";
import Register from "./pages/Register";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ScreenPreApp/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )

    };