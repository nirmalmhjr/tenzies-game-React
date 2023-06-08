import React from 'react'

export default function Die(props){
  let styles = {
    backgroundColor: props.selected ? "#59E391" : "FFFFFF",
  };

   return (
     <div className="dice" style={styles} onClick={props.selectedDice}>
       <h2>{props.value}</h2>
     </div>
   ); 
}

