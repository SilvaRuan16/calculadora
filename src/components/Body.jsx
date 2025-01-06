import { useState } from 'react';
import BtnDiv from './BtnDiv';
import Button from './Button';

function Body() {
  const [currentValue, setCurrentValue] = useState('0');
  const [previousValue, setPreviousValue] = useState('');
  const [operator, setOperator] = useState('');
  const [isResultDisplayed, setIsResultDisplayed] = useState(false);

  const handleNumberClick = (value) => {
    if (isResultDisplayed) {
      setCurrentValue(value)
      setIsResultDisplayed(false)
    } else {
      setCurrentValue(currentValue === "0" ? value : currentValue + value)
    }
  }

  const handleOperatorClick = (op) => {
    if (operator && currentValue) { calculate() }
    setOperator(op)
    setPreviousValue(currentValue)
    setCurrentValue("")
  }

  const calculate = () => {
    let result;
    const prev = parseFloat(previousValue)
    const current = parseFloat(currentValue)

    switch (operator) {
      case "+":
        result = prev + current
        break
      case "-":
        result = prev - current
        break
      case "*":
        result = prev * current
        break
      case "/":
        result = prev / current
        break
      default:
        return alert("Operador inválido")
    }

    setCurrentValue(result.toString())
    setPreviousValue("")
    setOperator("")
    setIsResultDisplayed(true)
  }

  const handleClear = () => {
    setCurrentValue("0")
    setPreviousValue("")
    setOperator("")
  }

  return (
    <div className="w-[400px] h-[500px] bg-white rounded-2xl flex flex-col shadow-md">
      <div className="w-auto h-[90px] rounded-t-2xl border-b-2 flex flex-row justify-between">
        <div className='flex justify-center items-center ml-5'><button onClick={handleClear} className='w-14 h-14 text-xl'>C</button></div>
        <h2 className='text-[40px] text-right p-4'>{currentValue}</h2>
      </div>
      <div className='w-auto h-screen flex flex-row flex-wrap justify-center items-center'>
        <BtnDiv>
          <Button onClick={() => handleNumberClick("7")}>7</Button>
          <Button onClick={() => handleNumberClick("8")}>8</Button>
          <Button onClick={() => handleNumberClick("9")}>9</Button>
          <Button onClick={() => handleOperatorClick("/")}>/</Button>
        </BtnDiv>
        <BtnDiv>
          <Button onClick={() => handleNumberClick("4")}>4</Button>
          <Button onClick={() => handleNumberClick("5")}>5</Button>
          <Button onClick={() => handleNumberClick("6")}>6</Button>
          <Button onClick={() => handleOperatorClick("*")}>*</Button>
        </BtnDiv>
        <BtnDiv>
          <Button onClick={() => handleNumberClick("1")}>1</Button>
          <Button onClick={() => handleNumberClick("2")}>2</Button>
          <Button onClick={() => handleNumberClick("3")}>3</Button>
          <Button onClick={() => handleOperatorClick("-")}>-</Button>
        </BtnDiv>
        <BtnDiv>
          <Button onClick={() => handleNumberClick("0")}>0</Button>
          <Button onClick={() => handleNumberClick(".")}>.</Button>
          <Button onClick={calculate}>=</Button>
          <Button onClick={() => handleOperatorClick("+")}>+</Button>
        </BtnDiv>
      </div>
    </div>
  )
}
export default Body;