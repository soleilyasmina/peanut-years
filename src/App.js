import React, { useState } from 'react';
import tweet from './images/IMG_0400.png';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [peanutAge, setPeanutAge] = useState(null);

  const handleSubmit = (e) => {
    const today = new Date();
    const birth = new Date(birthdate);
    const UNIXDifference = today.getTime() - birth.getTime();
    const years = UNIXDifference / (1000 * 60 * 60 * 24 * 365.25);
    setPeanutAge(years.toFixed(2));
  };

  return (
    <>
      <div className="App">
        <img src={tweet} alt="tweet"/>
        <h4>How old are you in Peanut Years?</h4>
        <input onChange={(e) => setBirthdate(e.target.value)} type="date" max={new Date().toISOString().split('T')[0]}/>
        <button onClick={handleSubmit}>Calculate!</button>
        {peanutAge && <h5>You are {peanutAge} peanut years old.</h5>}
      </div>
      <footer>made by&nbsp;
        <a href="https://soleilyasmina.com">
          @soleilyasmina
        </a>
      </footer>
    </>
  );
}

export default App;
