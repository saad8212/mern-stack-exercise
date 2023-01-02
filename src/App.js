import './App.css'; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/navbar";
import Home from "./components/pages/home";
import NoPage from "./components/pages/noPage";
import Login from './components/pages/authentication/login';
import Signup from './components/pages/authentication/signup';
import CreateActivity from './components/pages/createActivity';
import PrivateComponent from './components/PrivateComponent';
import Details from './components/pages/details';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route element={<PrivateComponent/>}>
          <Route index element={<Home/>} />
          <Route path='/create' element={<CreateActivity/>} />
          <Route path='/details/:id' element={<Details/>} />
          <Route path="*" element={<NoPage/>} />
        </Route>
          <Route path='/login' element={<Login/>} />
          <Route path = "/signup" element={<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
}

 export default App