import { Route, Routes } from "react-router-dom";
import "./App.css";
import HOme from "./Pages/Home/Home/HOme";
import Footer from "./Sheard/Footer.js/Footer";
import Header from "./Sheard/Header/Header";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HOme></HOme>}></Route>
        <Route path="/home" element={<HOme></HOme>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
