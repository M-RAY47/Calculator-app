import { useState } from 'react'
import './App.css'
import { digitNumber, operatorsSigns } from './types'

function App() {
  const [formula, setFormula] = useState('')
  const [displayNumber, setDisplayNumber] = useState('')
  const tenDigits: digitNumber[] = [
    {
      id: 'clear',
      name: 'clear',
      value: 'AC'
    },
    {
      id: '*',
      name: "multiply",
      value: '*'
    },
    {
      id: '/',
      name: "divide",
      value: '/'
    },
    {
      id: 7,
      name: 'seven',
      value: 7
    },
    {
      id: 8,
      name: 'eight',
      value: 8
    },
    {
      id: 9,
      name: 'nine',
      value: 9
    },
    {
      id: '+',
      name: "add",
      value: '+'
    },
    
    {
      id: 4,
      name: 'four',
      value: 4
    },
    {
      id: 5,
      name: 'five',
      value: 5
    },
    {
      id: 6,
      name: 'six',
      value: 6
    },
    {
      id: '-',
      name: "subtract",
      value: '-'
    },
    {
      id: 1,
      name: 'one',
      value: 1
    },
    {
      id: 2,
      name: 'two',
      value: 2
    },
    {
      id: 3,
      name: 'three',
      value: 3
    },
    {
      id: 0,
      name: 'zero',
      value: 0
    },
    {
    id: '.',
    name: 'decimal',
    value: '.'
    },
      {
      id: 'equals',
      name: 'equals',
      value: '='
    }
  ]

  const buttonPress = (digit) => {
    console.log('buttonPress', digit)
    if(digit === 'AC') {
      setDisplayNumber('0')
      setFormula('')
    } else if(digit === '='){
      const newFormula = parseFloat(digit) 
      const result = displayNumber + '' + digit

    } else if(typeof digit === 'number' && displayNumber) {
      const newNum =  displayNumber + '' + digit
      setDisplayNumber(newNum)
    } else if(digit === 'AC') {
    }else setDisplayNumber(digit)
  }

  return (
    <>
    <div className='calculator'>
      <div className='formulaScreen'>{formula}
      </div>
      <div className='outputScreen' id="display">{displayNumber}</div>
      <div className="nine-digits">
        { tenDigits.map((digit) => (
          <button className={`digit ${digit.name}`} value={digit.value} key={digit.id} id={digit.name} onClick={() => buttonPress(digit.value)}> {digit.value}</button>
          ))}
      </div>
    </div>
    </>
  )
}

export default App
