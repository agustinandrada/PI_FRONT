import "./App.css";
import { Detail, Form, Home, Landing, Nav, About } from "./Views/Index-Views";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && location.pathname !== "/form" && <Nav />}
      <Routes>
        <Route path="/home/:id" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
