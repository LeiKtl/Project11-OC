import './transaction.css';
import Accounts from '../../components/accounts';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import TransactionsDropdown from '../../components/transactionsDropdown'

function Transaction () {
    const { id } = useParams();
    const [transactions, setTransactions] = useState([]);
    const [account, setAccount] = useState([]);

    useEffect(() => {
        fetch("/accountData/transactionsInfo.json")
        .then((response) => response.json())
        .then((data) => {
            setTransactions(data)
        })
    }, [id]);

    useEffect(() => {
        fetch("/accountData/accountsInfo.json")
        .then((response) => response.json())
        .then((dataAccounts) => {
            setAccount(dataAccounts.find((account) => {
                return account.id === Number(id)
                } ))
        })
    }, [id]);
    

    return (
        <main className="main bg-dark">
            <Accounts id={id} key={`accounts${id}`} title={account.title} amount={account.amount} description={account.description} cross={true}/>
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
            {transactions.map((transaction, index) => {
                return (
                <TransactionsDropdown key={`transactions${index}`} date={transaction.date} description={transaction.description} amount={transaction.amount} balance={transaction.balance} type={transaction.type} category={transaction.category}/> 
                )
            })}
            
        </main>
    )
}

export default Transaction;