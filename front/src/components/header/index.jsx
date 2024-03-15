import './header.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/img/argentBankLogo.png'

function Header () {
    // const token = localStorage.getItem("token")
    const token = useSelector((state => state.token))
    const userName = useSelector((state => state.userName))
    const dispatch = useDispatch()
    
    function handleLogout () {
        // localStorage.removeItem("token");
        dispatch({type : "user/logout", payload : ''})
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
            <div className='header-user-profile'>
                <div>
                    <i className="fa fa-user-circle"></i>
                    <span>{ userName }</span>
                </div>
                <Link to='/' className="main-nav-item" onClick={handleLogout}><i className="fa-solid fa-right-from-bracket"></i> Logout</ Link>    
            </div>
            : 
            <div>
                <Link to='/login' className="main-nav-item"><i className="fa fa-user-circle"></i> Sign In</ Link>
            </div>}
        </nav>
    )
}

export default Header;