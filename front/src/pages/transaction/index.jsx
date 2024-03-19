import './transaction.css';
import Accounts from '../../components/accounts';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import TransactionsDropdown from '../../components/transactionsDropdown'
import { useSelector, useDispatch } from 'react-redux';

import { getAllTransactions } from '../../services/fetch';

function Transaction () {
    const dispatch = useDispatch();
    const { id } = useParams();

    const accounts = useSelector((state) => state.accounts);
    const [account, setAccount] =useState(null)
    const transactions = useSelector((state) => state.transactions)
    console.log(transactions)

    useEffect(() => {
        getAllTransactions()
        .then ((transactions) => {
            dispatch({type: "user/transactions" , payload: transactions})
        })
    }, [dispatch]);

    useEffect(() => {
        const accountMatchingId = accounts?.find((account) => {
            return account.id === Number(id)
        })
        setAccount(accountMatchingId)
    }, [id, accounts]);

    return (
        <main className="main bg-dark">
            <Accounts id={id} key={`accounts${id}`} name={account?.name} amount={account?.amount} description={account?.description} cross={true}/>
            <div className="transactions-titles">
                <div className="transactions-date-description">
                    <h3>Date</h3>
                    <h3>Description</h3>
                </div>
                <div className="transactions-price">
                    <h3>Amount</h3>
                    <h3>Balance</h3>
                </div>
            </div>
            {transactions?.map(({id, date, description, amount, balance, type, category}) => {
                return (
                <TransactionsDropdown key={`transactions${id}`} date={date} description={description} amount={amount} balance={balance} type={type} category={category}/> 
                )
            })}
            
        </main>
    )
}

export default Transaction;