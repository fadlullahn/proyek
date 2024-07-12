import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/homes/Login";
import Dashboard from "./pages/dashboards/Dashboard";
import User from "./pages/dashboards/User";
import Product from "./pages/dashboards/Product";
import AddUser from "./pages/dashboards/AddUser";
import EditUser from "./pages/dashboards/EditUser";
import AddProduct from "./pages/dashboards/AddProduct";
import EditProduct from "./pages/dashboards/EditProduct";
import Home from "./pages/homes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/add" element={<AddUser />} />
        <Route path="/user/edit/:id" element={<EditUser />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
