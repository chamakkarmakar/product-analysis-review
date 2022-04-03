import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/*' element={<h1>Not Found 404</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
