import AccountContainer from './AccountContainer';
import './App.css';
import React from 'react';
function App() {
  return (
    <div classnName="ui raised segment">
      <div className="ui segment violet inverted">
        <h2> BANK OF FLATIRON</h2>
      </div>
      <AccountContainer />
    </div>
  );
}

export default App;
