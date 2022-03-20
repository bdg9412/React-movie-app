import { useState , useEffect} from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault(); // form 태그의 submit 방지
    if (toDo === "") {
      // 입력이 비었다면 이벤트 실행 종료
      return; 
    }
    setToDos(currentArray => [toDo, ...currentArray]); // todo list 추가, spread operator를 사용하여 배열이나 문자열과 같은 반복 데이터에서 0개 이상의 요소 반환 가능
    setTodo(""); // 입력 값 핸들링 후 초기화
  }
  return (
    <div>
      <h1>My To Dos({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        {/*form은 그 안에 submit을 포함하고 있다.*/}
        <input type="text" value={toDo} placeholder="Write your to do..." onChange={onChange} />
        <button >Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item,index)=> (
          <li key={index}>{item} iter is  {index}</li>
      ))} 
      </ul>
      {/* map을 사용하여 array안의 모든 element에 동일한 연산 적용
          map을 사용할때 elemen item과 index를 argument로 사용할 수 있다.*/}
    </div>
  );
}

export default App;
