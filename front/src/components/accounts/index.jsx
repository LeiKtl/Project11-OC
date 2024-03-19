import './accounts.css';
import { Link } from 'react-router-dom';

function Accounts (props) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{props.name}</h3>
                <p className="account-amount">{props.amount}</p>
                <p className="account-amount-description">{props.description}</p>
            </div>
            {props.cross === true ? <Link to="/profile"><i className="fa-solid fa-xmark"></i></Link>
            : <div className="account-content-wrapper cta">
                <Link to={`/profile/accounts/${props.id}`}>
                    <button className="transaction-button">View transactions</button>
                </ Link>
            </div>}
        </section>
    )
}

export default Accounts;