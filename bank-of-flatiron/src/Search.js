import React, {useState} from "react";
import Transaction from "./Transaction";
function Search({handleSearch}){
    return(
        <div className="ui large fluid icon input">
            <input type="text" placeholder="Request for your Transactions" 
            onChange={handleSearch}/>
            <i className="circular search link icon"></i>
        </div>
    );
<Transaction />
}
export default Search;