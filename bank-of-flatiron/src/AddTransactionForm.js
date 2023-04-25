import React,{useState} from "react";
import Transaction from "./Transaction";
function AddTransactionForm(handleFormUpdate){
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        handleFormUpdate({date, description, category, amount})
      }
    


    // const submission =(e)=>{
    //     fetch("http://localhost:3001/transactions",{
    //         method :"POST",
    //         headers:{"Content-Type" : "application/json"},
    //         body:JSON.stringify(transactions),
    //     });
    // }

        

    return (

        <div className="ui segment">
            <form onSubmit={handleSubmit}  className="ui form form-control form-control-lg ">
                <div className="inline fields">
                 <input value={date} onChange={(e)=>setDate(e.target.value)} type="date"name="" className=" "/>
                 <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" name="description" placeholder="Description" className=""/>
                 <input value={category} onChange={(e) => setCategory(e.target.value)} type="text" name="category" placeholder="Category" className=""/>
                 <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" name="amount" placeholder="Amount" step="0.01" className=""/>
                 
                </div>

                <button className="ui button" type="submit">
                  Add Transaction
                </button>
            </form>
        </div>
    );
}
export default AddTransactionForm;