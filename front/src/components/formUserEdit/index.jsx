import { useState } from 'react';
import './formUserEdit.css'
import { store } from '../../store';
import { useSelector } from 'react-redux';
import { changeUsername } from '../../services/fetch';

function FormUserEdit (props) {
    const [newUsername, setNewUsername] = useState(store.getState().userName);
    const token = useSelector((state) => state.token)

    function handleCancel (e) {
        e.preventDefault();
        props.close()
    };

    function handleSubmit (e) {
        e.preventDefault();
        const userName = {
            userName : newUsername
        }
        changeUsername(token, userName)
        .then(() => {
            props.onSuccess()
        })
        .catch(() => window.alert("Une erreur est survenue, veuillez réessayer."))
    };

    return (
        <div className='form-content'>
            <h2>Edit User Info</h2>
            <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" defaultValue={store.getState().userName} onChange={event => setNewUsername(event.target.value)} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="firstname">First Name</label>
                <input type="firstname" id="firstname" value={store.getState().firstName} disabled/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastname">Last Name</label>
                <input type="lastname" id="lastname" value={store.getState().lastName} disabled/>
            </div>
            <div className="formUserEdit-buttons">
                <button className="save-button" type="submit">Save</button>
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
            </div>
            </form>
        </div>
    )
}

export default FormUserEdit;