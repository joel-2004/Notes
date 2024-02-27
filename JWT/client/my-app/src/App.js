import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import DashBoard from "./components/DashBoard";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/Login" element={<Login></Login>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/Signup" element={<Signup></Signup>}></Route>
          <Route path="/Dashboard" element={<DashBoard></DashBoard>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
