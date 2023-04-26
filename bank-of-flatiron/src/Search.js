import React, {useState} from "react";
function Search({getFilter}){
    return(
        <div className="ui large fluid icon input">
            <input type="text" placeholder="find recent transactions" onChange={getFilter}
            />
            <i className="circular searchlink icon"></i>
        </div>
    );
}
export default Search;