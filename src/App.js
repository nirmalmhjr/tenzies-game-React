import React from 'react'
import Die from './Die'
import {nanoid} from 'nanoid'


export default function App() {
  
  let [dice, setDice] = React.useState(allNewDice())
  let [tenzies, setTenzies]= React.useState(false)

  React.useEffect(()=>{
    let allSelected = dice.every(die=>die.selected)
    let firstValue = dice[0].value
    let allSameValue = dice.every(die=>die.value == firstValue)

    if(allSelected && allSameValue){
      setTenzies(true)
      console.log('you have won')
    }

  },[dice])

  function allNewDice(){
    let newDice= []
    for (let i = 0; i < 10; i++) {
      newDice.push({
        value:Math.ceil(Math.random()*6),
        selected: false,
        id: nanoid()
      }) }
      return newDice
  }
  // allNewDice()
console.log(dice)



let diceElements = dice.map(dice=>(
    <Die 
      value={dice.value}
      id={dice.id}
      selected={dice.selected}
      key={dice.id}
      selectedDice={()=>selectedDice(dice.id)}
    />
))


function selectedDice(id) {
   setDice(oldDice => oldDice.map(die=>(
    die.id===id? {
      ...die, selected:!die.selected
    } : die
   )))
  console.log("selectedDice ran");
  console.log(id);
} 

function rollDice(){
  if(!tenzies){
    setDice(oldDice=> oldDice.map(die=>(
      die.selected? die:{
        value:Math.ceil(Math.random()*6),
        selected: false,
        id: nanoid()
      }
    )))
  } else{
    setTenzies(false)
    setDice(allNewDice())


  }


}

  return (
    <div className="container">
      <h1 className="title">Tenzies</h1>
      <h2 className="instruction">
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls
      </h2>
      <div className="dice-container">
        {/* <Die value={1}/> */}
        {diceElements}
      </div>
      <button onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
      {/* <button onClick={rollDice}>Roll</button> */}
    </div>
  );
}
