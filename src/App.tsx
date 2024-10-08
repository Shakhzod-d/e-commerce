import "./App.css";
import { Home } from "./pages";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Product, Register } from "./pages";
import { Layout } from "./layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
