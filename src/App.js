import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Nav } from 'react-bootstrap';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Blog from './components/Blog/Blog';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Nav className="nav-bar justify-content-center bg-light w-75 p-2 my-5 mx-auto" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/review">REVIEW</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/dashboard">DASHBOARD</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">BLOG</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/about">ABOUT</Nav.Link>
        </Nav.Item>
      </Nav>
      

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
