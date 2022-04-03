import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/review' element={<Review />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/*' element={<h1>Not Found 404</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
