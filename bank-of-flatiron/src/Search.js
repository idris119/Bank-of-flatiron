import React, {useState} from "react";
function Search({getFilter}){
    return(
        <div className="ui large fluid icon input">
            <input type="text" placeholder="Request for your Transactions" onChange={getFilter}/>
            <i className="circular search link icon"></i>
        </div>
    );
}
export default Search;