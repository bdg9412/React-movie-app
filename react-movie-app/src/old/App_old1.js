import Button from "./Button";
import styles from "./App.module.css"
import { useState , useEffect} from "react";
// useEffect를 사용하면 지정한 코드 내용이 딱 한번만 실행되도록 보호한다.
// useEffect는 두개의 argument를 인자로 전달받는데, 첫번째는 처음에만 실행하고 싶은 내용이며  두번째는 state 중 변화를 감지하고 싶은 요소를 명시

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  console.log("run all the time");
  const iRunOnlyOnce = () => {
      console.log("i run only once");
  }
  useEffect(() => {
    if (keyword.length > 5){
      console.log("search keyword", keyword);
    }
  },[keyword]) 
  // deps에 state 중 변화를 감지하고 싶은 요소를 명시
  // 위처럼 keyword를 선택하면, keyword가 변화할 때 searc keyword "keyword"가 출력된다.

  useEffect(iRunOnlyOnce,[]);
  // deps에 state 중 변화를 감지하고 싶은 요소를 명시
  // 위처럼 빈칸으로 deps를 남겨두면, 위에 해당하는 로직은 맨 처음 순간에만 실행된다.
  return (
    <div>
      <input onChange={onChange} type={"text"} placeholder="Search here..." />
      <h1 className={styles.title}>Welcome back to React</h1>
      <button onClick={onClick}>Click me</button>
      <Button text="dongkeun"/>
    </div>
  );
}

export default App;
