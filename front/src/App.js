import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import LogIn from './pages/logIn';
import Profile from './pages/profile';
import Transaction from './pages/transaction';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/login" element={<LogIn />} ></Route>
        <Route path="/profile" element={<Profile />} ></Route>
          <Route path="/profile/accounts/:id" element={<Transaction />} ></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
