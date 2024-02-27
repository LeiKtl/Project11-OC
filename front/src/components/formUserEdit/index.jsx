import { useState } from 'react';
import './formUserEdit.css'

function FormUserEdit (props) {
    const [newUsername, setNewUsername] = useState(props.data.userName);

    const token = localStorage.getItem("token");

    function handleCancel (e) {
        e.preventDefault();
        console.log("ok");
        props.close()
    };

    function handleSubmit (e) {
        e.preventDefault();
        const data = {
            userName : newUsername
        }

        fetch("http://localhost:3001/api/v1/user/profile", {
            method : "PUT",
            headers : {
                "Accept" : "application/json",
                "Authorization" : `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        .then((response) => response.json())
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
                <input type="text" id="username" defaultValue={props.data.userName} onChange={event => setNewUsername(event.target.value)} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="firstname">First Name</label>
                <input type="firstname" id="firstname" value={props.data.firstName} disabled/>
            </div>
            <div className="input-wrapper">
                <label htmlFor="lastname">Last Name</label>
                <input type="lastname" id="lastname" value={props.data.lastName} disabled/>
            </div>
            <div className="formUserEdit-buttons">
                <button className="save-button" type="submit">Save</button>
                {/* faire un submit button? */}
                <button className="cancel-button" onClick={handleCancel}>Cancel</button>
                {/* onClick={handleCancel} */}
                {/* faire en sorte que ca se ferme dynamiquement: useState pour cancel ? open(true) ---> toggle au click ? ou supprimer le contenue de username au click?*/}
            </div>
            </form>
        </div>
    )
}

export default FormUserEdit;