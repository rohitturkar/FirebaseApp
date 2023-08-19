import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import Home from "./Component/Home/Home"
import Add from "./Component/Add/Add"

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  import {Header} from "./Component/Header/Header"

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <ToastContainer/>
     <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Add/>}/>
      <Route path="/update/:id" element={<Add/>}/>
      
     </Routes>
      
     </div>
    </BrowserRouter>
    
  );
}

export default App;
