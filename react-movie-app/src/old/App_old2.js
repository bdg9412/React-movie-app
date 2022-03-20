import Button from "./Button";
import styles from "./App.module.css"
import { useState , useEffect} from "react";

function Hello(){
  useEffect(function(){
    console.log("hi");
    return function(){
      console.log("bye :(");
    }
  })
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing(
    (prev) => !prev
  )
  return (
    <div>
      {showing ? <Hello /> : null} {/*조건문 활용 showing이 true이면 Hello 컴포넌트를 그렇지않다면 null 반환*/}
      <button onClick={onClick}>{showing ? "Hide":"show"}</button>
    </div>
  );
}

export default App;
