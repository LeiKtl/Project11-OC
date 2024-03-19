import './profile.css';
import Accounts from '../../components/accounts';
import { useState, useEffect, useCallback } from 'react';
import FormUserEdit from '../../components/formUserEdit';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUserInfo, getAllAccounts } from '../../services/fetch';

function Profile () {
    const [isClosed, setIsClosed] = useState(true);

    const dispatch = useDispatch();
    const userName = useSelector((state) => state.userName);
    const accounts = useSelector((state) => state.accounts);
    
    const token = useSelector((state) => state.token)

    const fetchUserProfile = useCallback(() => {
        getAllUserInfo(token)
        .then ((data) => {
            const user = data.body
            dispatch({type: "user/setProfile", payload : user})
        })
    }, [dispatch, token]);

    function toggle () {
        setIsClosed(!isClosed);
    };

    function handleSubmit () {
        toggle();
        fetchUserProfile ();
    };

    const fetchUserAccounts = useCallback(() => {
        getAllAccounts()
        .then((dataAccounts) => {
            const accounts = dataAccounts
            dispatch({type: "user/accounts", payload: accounts})
        })
    }, [dispatch]);

    useEffect(() => {
        fetchUserAccounts();
        fetchUserProfile();
    }, [fetchUserAccounts, fetchUserProfile]);

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
        {accounts?.map(({id, name, amount, description}) => (
            <Accounts id={id} key={`accounts${id}`} name={name} amount={amount} description={description}  />
        ))}
    </main>
    )
}

export default Profile;