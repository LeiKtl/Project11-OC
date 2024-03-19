import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import LogIn from './pages/logIn';
import Profile from './pages/profile';
import Transaction from './pages/transaction';
import Footer from './components/footer';
import { Provider } from 'react-redux';
import { store } from './store/index.js'
import RequireAuth from './middlewares/authGuard.jsx';

function App() {
  return (
    <Provider store={ store }>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} ></Route>
          <Route path="/login" element={<LogIn />} ></Route>
          <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} ></Route>
            <Route path="/profile/accounts/:id" element={<RequireAuth><Transaction /></RequireAuth>} ></Route>
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
