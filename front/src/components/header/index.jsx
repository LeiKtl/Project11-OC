import './header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/argentBankLogo.png'

function Header () {
    const token = localStorage.getItem("token")
    
    function handleLogout () {
        localStorage.removeItem("token");
    }

    return (
        <nav className="main-nav">
            <Link to='/' className="main-nav-logo">
                <img
                className="main-nav-logo-image"
                src={ logo }
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </ Link>
            {token ? 
            <div>
                <Link to='/signIn' className="main-nav-item" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i> Logout</ Link>
            </div>
            : 
            <div>
                <Link to='/signIn' className="main-nav-item"><i className="fa fa-user-circle"></i> Sign In</ Link>
            </div>}
        </nav>
    )
}

export default Header;