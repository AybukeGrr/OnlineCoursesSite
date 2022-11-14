import './App.css';
import Footer from './components/Footer/Footer';
import TopNavbar from './components/Navbar/Navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Kids from "./pages/Kids/Kids";
import WebApp from "./pages/App/WebApp";
import English from "./pages/English/English";
import Teachers from "./pages/Teachers/Teachers";
import Translate from "./pages/Translate/Translate";
import WhoAreWe from "./pages/WhoAreWe/WhoAreWe";


function App() {
  return (
    <div className="App">
      <TopNavbar />
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="*" />
          <Route element={<Kids />} path="/kids" />
          <Route element={<Teachers />} path="/teachers" />
          <Route element={<WhoAreWe />} path="/whoarewe" />
          <Route element={<Translate />} path="/translate" />
          <Route element={<English />} path="/english" />
          <Route element={<WebApp />} path="/app" />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
