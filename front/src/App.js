import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
// import Home from './pages/home';
// import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" >
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
