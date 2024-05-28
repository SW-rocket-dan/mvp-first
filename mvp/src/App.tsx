import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "@pages/MainPage";
import Prompt from "@pages/Prompt";
import EditorPage from "@pages/EditorPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="/prompt" element={<Prompt />}></Route>
                <Route path="/editor" element={<EditorPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
