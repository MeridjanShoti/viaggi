import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyHomePage from "./component/home/MyHomePage";
import MyNavBar from "./component/navbar/MyNavbar";
import Dipendenti from "./component/dipendenti/Dipendenti";
import Login from "./component/login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<MyHomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/prenotaViaggio" element={"prenotaViaggio"} />
          <Route path="/dipendenti" element={<Dipendenti />} />
          <Route path="/prenotazioni" element={"prenotazioni"} />
          <Route path="*" element={<MyHomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
