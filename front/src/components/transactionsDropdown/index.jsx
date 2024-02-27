import { useState } from 'react';
import './transactionsDropdown.css';

function TransactionsDropdown (props) {
    const [isClosed, setIsClosed] = useState(true);
    const [editCategory, setEditCategory] = useState(false);
    const [editNote, setEditNote] = useState(false);

    function toggle () {
        setIsClosed(!isClosed)
    }

    function toggleCategory() {
        setEditCategory(!editCategory)
    }

    function toggleNote() {
        setEditNote(!editNote)
    }

    // function changeCategory() {
    //     fetch("", {
    //         method: "PUT",
    //     })
    // }

    return (
        <section className='transaction-dropdown'>
            <div className='transaction-table-header'onClick={toggle}>
                <div className='transaction-date-description'>
                    <p className='transaction-date'>{props.date}</p>
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
                <div className='transaction-type-content'>
                    <h4 className='transaction-type'>Transaction type</h4>
                    <p>{props.type}</p>
                </div>
                <div className='transaction-category-content'>
                    <h4 className='transaction-category'>Category</h4>
                    <div className='transaction-category_highlight'>
                        {editCategory ? 
                        <select>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                        </select>
                        : <p>{props.category}</p>}
                        <i className="fa-solid fa-pencil" onClick={toggleCategory}></i>
                    </div>
                </div>
                <div className='transaction-note-content'>
                    <h4 className='transaction-note'>Note</h4>
                    <div className='transaction-category_highlight'>
                        {editNote ? <textarea></textarea>
                        : <p>Lorem ipsum</p>}
                        
                        <i className="fa-solid fa-pencil" onClick={toggleNote}></i>
                    </div>
                </div>
            </div>}
        </section>
    )
}

export default TransactionsDropdown;