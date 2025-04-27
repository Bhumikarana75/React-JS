import { useState } from "react";
import {Counter} from "./Counter";


function App() {
  const [no, setNo] = useState(0);
  
  const Incre = () => {
    setNo(no + 1);
  }

  const Decre = () => {
    setNo(no - 1);
  }

  const Reset = () => {
    setNo(0);
  }

  return (
    <Counter
      no = {no}
      plus = {Incre}
      minus = {Decre}
      reset = {Reset}
    />
  )
}

export default App;