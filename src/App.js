import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import Header from './components/Header/Header';
import Reviews from './components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/*' element={<h2>Not Found 404</h2>}></Route>
      </Routes>
    </div>
  );
}

export default App;
