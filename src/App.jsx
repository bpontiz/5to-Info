import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Product1 from './components/Products/product1';


function App() {
  return (
    <Router>

      <Routes>

        <Route path='/' element={<Header />} />

        <Route path='/product1' element={<Product1 />} />

      </Routes>

    </Router>
  );
}

export default App;
