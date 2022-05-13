import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import ScreenPreApp from "./pages/ScreenPreApp";
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
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )

    };