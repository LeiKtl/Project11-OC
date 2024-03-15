import './profile.css';
import Accounts from '../../components/accounts';
import { useState, useEffect } from 'react';
import FormUserEdit from '../../components/formUserEdit';
import { useDispatch, useSelector } from 'react-redux';

function Profile () {
    const [isClosed, setIsClosed] = useState(true);
    const [accounts, setAccounts] = useState([]);

    const dispatch = useDispatch();
    const userName = useSelector((state) => state.userName);
    // const accounts = useSelector((state) => state.accounts)
    // const userName = store.getState().userName;
    
    const token = useSelector((state) => state.token)

    function fetchUserProfile () {

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
          dispatch({type: "user/setProfile", payload : user})
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
          // const accounts = dataAccounts
          // dispatch({type: "user/accounts", payload: accounts})
          // console.log(accounts)
          // console.log(dataAccounts)
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
        <h2 className="profile-name">{ userName }!</h2>
        <button className="edit-button" onClick={toggle}>Edit Name</button>
        </> 
        : <FormUserEdit onSuccess={handleSubmit} close={toggle}/>}
      </div>
      <h2 className="sr-only">Accounts</h2>
      {accounts.map(({id, title, amount, description}) => (
        <Accounts id={id} key={`accounts${id}`} title={title} amount={amount} description={description}  />
      ))}
    </main>
    )
}

export default Profile;