import './profile.css';
import Accounts from '../../components/accounts';
import { useState, useEffect } from 'react';
import FormUserEdit from '../../components/formUserEdit';

function Profile () {
    const [isClosed, setIsClosed] = useState(true);
    const [accounts, setAccounts] = useState([])

    function toggle () {
        setIsClosed(!isClosed)
    };

    useEffect(() => {
      fetch("/accountData/accountsInfo.json")
      .then((response) => response.json())
      .then((dataAccounts) => {
          setAccounts(dataAccounts)
      })
  }, []);

    return (
    <main className="main bg-dark">
      <div className="header">
        {/* changer nom selon user avec API */}
        {isClosed ? 
        <>
        <h1 className="profile-welcome-text">Welcome back</h1>
        <h2 className="profile-name">Tony Jarvis!</h2>
        {/* changer nom avec Username par API */}
        <button className="edit-button" onClick={toggle}>Edit Name</button></> 
        : <FormUserEdit />}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map(({id, title, amount, description}) => (
        <Accounts id={id} key={`accounts${id}`} title={title} amount={amount} description={description}  />
      ))}
    </main>
    )
}

export default Profile;