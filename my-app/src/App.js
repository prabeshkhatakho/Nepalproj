import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Navbar from './components/Navbar.js'

import Kathmandu from './components/Kathmandu'
import Bhaktapur from './components/Bhaktapur'
import Home from './components/home'




function App() {
  return (
    <>
    

      <Router>
        <Navbar />
          <Routes>
            <Route path={"/"} element={<Home />}></Route> 
            
            <Route path='/Kathmandu' element ={<Kathmandu />}></Route>
            <Route path='/Bhaktapur' element ={<Bhaktapur />}></Route>
            
            
          </Routes>
      </Router>
    </>
  
  );
}

export default App;