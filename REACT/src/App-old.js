import {useState} from 'react'

export default function Square() {
  
  function alternarValor(){
    if(valor === 'X') setValor('O')
      else setValor('X')
  }

  const [valor, setValor]= useState('X')
 
  return <button onClick={alternarValor} className="square">{valor}</button>;
}
