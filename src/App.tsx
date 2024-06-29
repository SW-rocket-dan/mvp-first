import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "@pages/MainPage";
import Prompt from "@pages/Prompt";
import EditorPage from "@pages/EditorPage";
import InfoPage from "@pages/InfoPage.tsx";
import PaymentPage from "@pages/PaymentPage.tsx";
import TermOfUsePage from "@pages/TermOfUsePage.tsx";
import CardPage from "@pages/CardPage.tsx";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/prompt" element={<Prompt />}></Route>
                <Route path="/editor" element={<EditorPage />}></Route>
                <Route path='/info' element={<InfoPage />}></Route>
                <Route path='/payment' element={<PaymentPage />}></Route>
                <Route path='/terms' element={<TermOfUsePage/>}></Route>
                <Route path='/cards' element={<CardPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
