import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import MainPage from "@pages/MainPage";
import Prompt from "@pages/Prompt";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/prompt" element={<Prompt />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
