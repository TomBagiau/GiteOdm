import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Maison from "./components/Maison";
import Activites from "./components/Activites";
import Reserver from "./components/Reserver";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='la-maison' element={<Maison />} />
        <Route path='activites' element={<Activites />} />
        <Route path='reserver' element={<Reserver />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
