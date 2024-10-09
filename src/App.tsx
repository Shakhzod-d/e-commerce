import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Product, Register } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
