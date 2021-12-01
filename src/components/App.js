import React, {useState} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Card from './Card';
import FullCard from './FullCard';


function App() {
  const [words, setWord] = useState([]);
  const [fullCard, setfullCard] = useState(false);

  function addWord(newWord) {
    setWord(prevWord => {
      return [...prevWord, newWord];
    });
  }

  function handleClick(cardState) {
    setfullCard(cardState)
  }

  function handleSubmit(wordInput) {
    
    const word = {wordInput}
    fetch('/' ,{
      method : 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(word)
    }).then(response => response.json())
    .then((res) => {
      let meaning = res[0]
      
      addWord(meaning)
    })
   
  }

  return (
    <div>
      <Navbar onWordSubmit= {handleSubmit}/>
      {
        words.map((wordItem,index)=> {
          return (
            <div><Card
              key={index}
              word={wordItem.word}
              meaning={wordItem.meanings[0].definitions[0].definition}
              partsOfSpeech={wordItem.meanings[0].partOfSpeech} 
                onClick = {handleClick}
              />
              {console.log(fullCard)}
              {fullCard && <FullCard 
              word={wordItem}
                onClick = {handleClick}
              /> }
              
              </div>
          )
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
