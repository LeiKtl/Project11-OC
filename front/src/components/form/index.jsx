import { useNavigate } from 'react-router-dom';
import './form.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userConnexion } from '../../services/fetch';

function Form () {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const user = {
        email : email,
        password : password
    };

    function handleSubmit (e) {
        e.preventDefault();
        userConnexion(user)
        .then((data) => {
            const userInfo = data.body
            if (userInfo.token) {
            dispatch({type : "user/login", payload : userInfo});
            navigate("/profile");
            }
        })
        .catch(() => window.alert("Email ou mot de passe invalide, veuillez réessayer."))    
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Email</label>
                <input type="text" id="username" value={email} onChange={event => setEmail(event.target.value)}/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" value={password} onChange={event => setPassword(event.target.value)}/>
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
        </form>
    )
}

export default Form;