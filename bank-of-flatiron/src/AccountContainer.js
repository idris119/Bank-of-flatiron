import React ,{useEffect} from "react";
import TransactionsList from "./TransactionsList"
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import {useState} from "react";

function AccountContainer(){
    const [transaction,setTransaction]=useState([])
    const [Search,setSearch] =useState("")
      useEffect(()=>{
        fetch(" http://localhost:3006/transactions")
      .then((res)=>{res.json()})
      .then (transaction => {
        setTransaction(transaction.record.transactions)
        setSearch(transaction.record.transactions)
      })
    },[])
      function handleSearch(e){
        setTransaction(Search.filter(transaction => {
          return(transaction.description.toLowerCase().includes(e.target.value.toLowerCase()))
        }))
      }
      function handleFormUpdate(formData){
        const updatedTable = [...transaction, formData];
        setTransaction(updatedTable);
        fetch("http://localhost:3000/transactions",{
          method: "POST",
          body: JSON.stringify(updatedTable),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
    .then(data => {
      console.log("Success:", data);
    })
    .catch(error => {
      console.error("Error:", error);
    });
  }
  return (
    <div className ="">
      <div className="">
      <div className="col-6"> <Search handleSearch={handleSearch} /></div>
      <div></div>
    </div>

    
 
  
    <div className="d-flex justify-content-around ">
     <AddTransactionForm handleFormUpdate ={handleFormUpdate} />
     <TransactionsList transactions={transaction} />
    </div>
    </div>
  
    );

}


    



export  default AccountContainer;