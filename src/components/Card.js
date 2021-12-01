import React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function Card(props) {
  
  function handleCard() {
    props.onClick(true)
  }

  return (
    <div className="card">
      <h1>{props.word}</h1>
      <em>{props.partsOfSpeech}</em>
      <p>{props.meaning}</p>
      <ArrowForwardIosIcon 
        className = "card-arrow"
        fontSize="small"
        color="primary"
        onClick = {handleCard}
      />
    </div>
  );
}

export default Card;
