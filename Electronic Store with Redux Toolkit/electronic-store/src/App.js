import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mobile from "./features/Mobile";
import Laptop from "./features/Laptop";
import Home from "./features/Home";
import Users from "./features/Users";
// import Login from "./features/login";
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/mobile" element={<Mobile/>}/>
        <Route path="/users" element={<Users/>}/>
      </Routes>
    </Router>
  );
}

export default App;
