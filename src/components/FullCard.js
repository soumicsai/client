import React from "react";

function FullCard(props) {
  function handleClose(){
    props.onClick(false)
  }
  return (
    <div className = "full-card">
    <div className="full-card-inner">
      <h1>{props.word.word}</h1>
      <p>{props.phonetic}</p>
      {props.word.meanings.map(wordMeaning => {
        return (
          <div>
          <em>{wordMeaning.partOfSpeech}</em>
          <p>{wordMeaning.definitions[0].definition}</p>
          </div>
        )
      })}            
      <p><strong>Origin </strong>: {props.word.origin}</p>
      <button className='btn btn-primary' onClick={handleClose}>Close </button>
    </div>
    </div>
  );
}

export default FullCard;
