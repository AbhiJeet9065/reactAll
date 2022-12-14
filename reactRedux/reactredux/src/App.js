import React from 'react'
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, multNumber, divNumber } from "./actions"

const App = () => {

  // it alternative to the useContext hooks in react / consumer from context API
  const changeTheNumber = useSelector((state) => state.changeTheNumber);
  const changeOtherNumber = useSelector((state) => state.multTheNumber);  

  const dispatch = useDispatch();

  return (
    <>

      <div className="main-div">

        <div className="container">

          <h1>Increment/Decrement counter</h1>
          <h4>Using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement"
              onClick={ () => dispatch(decNumber()) }><span> - </span></a>
            <input name="quantity" type="text" className="quantity__input" value={changeTheNumber} />
            <a className="quantity__plus" title="Increment"
              onClick={ () => dispatch(incNumber(5)) }><span> + </span></a>
          </div>
        </div>

      </div>

      <div className="main-div my-5">

        <div className="container">

          <h1>Multiplication/Divide counter</h1>
          <h4>Using React and Redux</h4>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement"
              onClick={ () => dispatch(multNumber(5)) }><span> * </span></a>
            <input name="quantity" type="text" className="quantity__input" value={changeOtherNumber} />
            <a className="quantity__plus" title="Increment"
              onClick={ () => dispatch(divNumber()) }><span> / </span></a>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
