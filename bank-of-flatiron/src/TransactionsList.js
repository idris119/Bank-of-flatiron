import React from "react";
import Transaction from "./Transaction";
function TransactionsList({transactions}){
    const content =transactions.map((item)=>{
        return <Transaction key={item.id} date={item.date} description={item.description} category={item.category} amount={item.amount} />;
  })
    return(
        <table className ="ui celled striped padded tale">
            <tbody>
                <tr>
                    <th>
                    <h3 className ="ui center aligned header">ID</h3>
                    </th>
                    <h3 className="ui center aligned header">Date</h3>
                    <th>
                        <h3 className="ui center aligned header">Description</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Category</h3>
                    </th>
                    <th>
                        <h3 className="ui center aligned header">Amount</h3>
                    </th>
                    

                </tr>
                {content}



             </tbody>   
        </table> 

    );

}
export default TransactionsList;