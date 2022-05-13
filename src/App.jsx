import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import ScreenPreApp from "./pages/ScreenPreApp";
import Tela4 from "./pages/Tela4";
import Tela5 from "./pages/Tela5";
import Tela6 from "./pages/Tela6";
import Tela7 from "./pages/Tela7";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";


export default function App() {
    return (
      <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ScreenPreApp/>}/>
                    <Route path="/login" element ={<Login/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/4" element={<Tela4 />} /> 
                    <Route path="/5" element={<Tela5 />} />
                    <Route path="/6" element={<Tela6 />} />
                    <Route path="/7" element={<Tela7 />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>

    )

    };
   