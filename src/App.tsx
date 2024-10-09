import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Login, Product, Register } from "./pages";
import { Layout } from "./layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Product />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
