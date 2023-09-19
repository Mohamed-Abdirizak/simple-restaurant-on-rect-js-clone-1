import './App.css';
import Nav from './components/nav/nav';
import Home from './components/routers/Home'
import Blog from './components/routers/Blog'
import Pricing from './components/routers/Pricing'
import Contact from './components/routers/Contact'
import Login from './components/routers/Login'
import { Route, Router, Routes } from 'react-router-dom';
import SecondComponents from './components/secondComponent/SecondComponents';
import ThirdComponent from './components/thirdComponent/ThirdComponent';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>

      <SecondComponents/>
      <ThirdComponent />

      
     
    </div>
  );
}

export default App;
