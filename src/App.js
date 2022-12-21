import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Home from "./components/pages/home";
import NoPage from "./components/pages/noPage";
import Login from './components/pages/authentication/login';
import Signup from './components/pages/authentication/signup';
import CreateActivity from './components/pages/createActivity';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home/>} />
          <Route path='/create' element={<CreateActivity/>} />
          <Route path='/login' element={<Login/>} />
          <Route path = "/signup" element={<Signup/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

 export default App