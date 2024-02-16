import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import SignIn from './pages/signIn';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/signIn" element={<SignIn />} ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
