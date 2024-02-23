import { useNavigate } from 'react-router-dom';
import './form.css';
import { useState } from 'react';

function Form () {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate()

  console.log(password)
  console.log(email)

  const user = {
    email : email,
    password : password
  }

  function handleSubmit (e) {
    e.preventDefault();

    fetch("http://localhost:3001/api/v1/user/login", {
            method: "POST",
            headers: {
                "Accept" : "application/json",
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(user)
        })
    .then((response) => response.json())
    .then((data) => {
      const userInfo = data.body
      if (userInfo.token) {
        localStorage.setItem("token", userInfo.token);
        navigate("/profile");
      } else {
        console.log("erreur")
      }
    })
  }

    return (
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="username">Username/Email</label>
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