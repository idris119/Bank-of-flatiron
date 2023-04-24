import React ,{useEffect} from "react";
import TransactionsList from "./transactionsList";
import Search from "./Search";
import AddtransactionForm from"./AddTransactionForm";
import {useState} from "react";

function AccountContainer(){
    const [transactions,setTransaction]=useState([])
    function handleTransactions(){
        fetch("http://localhost:8001/transactions")
        .then((res)=>{return res.json()})
        .then ((data)=>setTransaction(data))
      }
      useEffect(()=>{
        handleTransactions();
      },[])


      function getFilter(e){
        setTransaction(transactions.filter(transaction => transaction.description.toLowerCase().includes(e.target.value.toLowerCase())))
      }
      return (
        <div>
          <Search  getFilter={getFilter}/>
          <AddTransactionForm />
          <TransactionsList transactions={transactions} />
        </div>
      );
      }
export  default AccountContainer;