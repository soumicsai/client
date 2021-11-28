import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';


function App() {
    
  function handleSubmit(wordInput) {
    
    const word = {wordInput}
    fetch('/' ,{
      method : 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(word)
    }).then(response => response.json())
    .then((res) => {
      let meaning = res[0]
      console.log(meaning)
    })
   
  }

  return (
    <div>
      <Navbar onWordSubmit= {handleSubmit}/>
      <Footer />
    </div>
  );
}

export default App;
