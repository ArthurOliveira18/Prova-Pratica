
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/RegisterProducts'
import ShowProducts from './pages/ShowProducts';



function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route path='/cadastro' element={<Register />}/>
          <Route path='/show' element={<ShowProducts />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;
