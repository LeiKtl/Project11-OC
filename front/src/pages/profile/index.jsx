import './profile.css';
import Accounts from '../../components/accounts';
import { useState, useEffect } from 'react';
import FormUserEdit from '../../components/formUserEdit';

function Profile () {
    const [isClosed, setIsClosed] = useState(true);
    const [accounts, setAccounts] = useState([]);
    const [data, setData] = useState([]);
    const [username, setUsername] = useState('');

    function fetchUserProfile () {
      const token = localStorage.getItem("token");

      fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "Accept" : "application/json",
            "Content-Type" : "application/json",
            "Authorization" : `Bearer${token}`
        }
      })
      .then((response) => response.json())
      .then((data) => {
          const user = data.body
          setUsername(user.userName)
          setData(user)
      })
    };

    function toggle () {
        setIsClosed(!isClosed);
    };

    function handleSubmit () {
      toggle();
      fetchUserProfile ();
    };

    function fetchUserAccounts () {
      fetch("/accountData/accountsInfo.json")
        .then((response) => response.json())
        .then((dataAccounts) => {
            setAccounts(dataAccounts)
        })
    };

    useEffect(() => {
      fetchUserAccounts();
      fetchUserProfile();
    }, []);

    return (
    <main className="main bg-dark">
      <div className="header">
        {isClosed ? 
        <>
        <h1 className="profile-welcome-text">Welcome back</h1>
        <h2 className="profile-name">{username}!</h2>
        <button className="edit-button" onClick={toggle}>Edit Name</button>
        </> 
        : <FormUserEdit data={data} onSuccess={handleSubmit} close={toggle}/>}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map(({id, title, amount, description}) => (
        <Accounts id={id} key={`accounts${id}`} title={title} amount={amount} description={description}  />
      ))}
    </main>
    )
}

export default Profile;