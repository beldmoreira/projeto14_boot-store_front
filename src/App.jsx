import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScreenPreApp from "./pages/ScreenPreApp";
import SignUpPage from "./pages/SignUpPage";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ScreenPreApp/>}/>
                <Route path="/signup" element={<SignUpPage/>}/>
            </Routes>
        </BrowserRouter>
    )

    };