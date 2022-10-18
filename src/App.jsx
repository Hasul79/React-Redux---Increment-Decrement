import React from "react";
import './App.css';
import { useDispatch , useSelector} from 'react-redux';

 function App() {
   const dispatch = useDispatch()
   const cash = useSelector(state => state.cash)
  //  console.log(cash)

  const addCash = (cash) => {
   dispatch({type: "ADD_CASH", payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className={'app'}>
      <div className={'div'}>{cash}</div>
      <div style={{display:"Flex"}}>
        <button onClick={() => addCash(Number(prompt()))}>Գումարել</button>
        <button onClick={() => getCash(Number(prompt()))}>Հանել</button>
      </div>
    </div>
  );
}
export default App;