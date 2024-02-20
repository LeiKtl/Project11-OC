import './form.css';
import { Link } from 'react-router-dom';

function Form () {
    return (
        <form>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* <a href="./user.html" class="sign-in-button">Sign In</a> */}
          <Link to="/profile"><button className="sign-in-button">Sign In</button></Link>
        </form>
    )
}

export default Form;