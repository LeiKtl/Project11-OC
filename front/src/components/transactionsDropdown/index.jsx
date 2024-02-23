import { useState } from 'react';
import './transactionsDropdown.css';

function TransactionsDropdown (props) {
    const [isClosed, setIsClosed] = useState(true);

    function toggle () {
        setIsClosed(!isClosed)
    }

    return (
        <section className='transaction-dropdown'>
            <div className='transaction-table-header'onClick={toggle}>
                <div className='transaction-date-description'>
                    <p>{props.date}</p>
                    <p>{props.description}</p>
                </div>
                <div className='transaction-price'>
                    <p>{props.amount}</p>
                    <p>{props.balance}</p>
                    <i className={isClosed ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-up chevron-open"}></i>
                </div>
            </div>
            {isClosed ? <></> 
            : <div className='transaction-content'>
                <div className='transaction-type'>
                    <h4>Transaction type</h4>
                    <p>{props.type}</p>
                    {/* mettre select */}
                </div>
                <div className='transaction-category'>
                    <h4>Category</h4>
                    <p>{props.category}</p>
                    {/* mettre select */}
                </div>
                <div className='transaction-note'>
                    <h4>Note</h4>
                    <p>Lorem ipsum</p>
                    {/* mettre textarea */}
                </div>
            </div>}
        </section>
    )
}

export default TransactionsDropdown;