import AccountContainer from './AccountContainer';
import './App.css';
import React from 'react';
function App() {
  return (
     <div className="ui raised segment"> 
     


  <nav className="bg-success p-2 text-white">

    <h2 className="   text-black font-weight-bold ">Bank of Flatiron</h2>
  </nav>
  <div></div>

  <div className="container-fluid">
  <AccountContainer />
  </div>
  

</div>
  );
}

export default App;
