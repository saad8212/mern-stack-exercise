import "./App.css";
import Navbar from "./components/layout/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from "./components/pages/addProduct";
import NoPage from "./components/pages/NoPage"; 
import Footer from "./components/layout/footer";
import Signup from "./components/pages/Signup";
import PrivateComponent from "./components/privateComponent";
import Login from './components/pages/Login'; 
import Products from './components/pages/products';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route element={<PrivateComponent />}>
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/" element={<Products/>} />
            <Route path="*" element={<NoPage />} />
          </Route>

          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
