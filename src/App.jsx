import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from './contexts/authContext';
import ScreenPreApp from "./pages/ScreenPreApp";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUpPage";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";


export default function App() {
    return (
      <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ScreenPreApp/>}/>
                    <Route path="/login" element ={<Login/>}/>
                    <Route path="/signup" element={<SignUpPage/>}/>
                    <Route path="/home" element={<Home/>} /> 
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/payment" element={<Payment/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>

    )

    };
   