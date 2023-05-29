import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Navbar from './components/Navbar'
import Kathmandu from './components/Kathmandu'
import Bhaktapur from './components/Bhaktapur'
import Home from './components/home'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <>
      <Router>
        
        <Sidebar />
        <Bhaktapur />
        <Kathmandu />
          <Routes>
            <Route path={"/"} element={<Home />}></Route> 
            <Route path='/Kathmandu' element ={<Kathmandu />}></Route>
            <Route path='/Bhaktapur' element ={<Bhaktapur />}></Route>
          </Routes>
      </Router>
      <div>
        <h1>Nepallllllll</h1>
      </div>
    </>
  
  );
}

export default App;