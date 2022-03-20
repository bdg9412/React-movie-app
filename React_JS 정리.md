# React.JS

## Reat.js?

- React JS는 interactive하도록 만들어주는 library이다.
- React-dom은 library 또는 package로 React element들을 HTML body에 둘수 있도록 해준다

## React.js 기초 개념 코드

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script> <!--React JS는 interactive하도록 만들어주는 library-->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> <!--React-dom library 또는 package로 React element들을 HTML body에 둘수 있도록 해준다-->
    <script>
        const root = document.getElementById("root"); // element 생성
        const h3 = React.createElement(
            "h3", // element 생성
            // {id: "sexy-span", style:{color:"red"}},
            {
                // property는 {} 안에 여러개 삽입 가능
                id: "title", style:{color:"red"},
                onMouseEnter:()=> console.log("oh yeah"),
            },
            "Hello I'm a span",
            ); // createElemnt속 대상은 꼭 html 태그여야 한다.
        /*$$typeof: Symbol(react.element)
        key: null
        props: {}
        ref: null
        type: "span"
        _owner: null
        [[Prototype]]: Object*/
        const btn = React.createElement("button",
        {
            style:{backgroundColor:"tomato"},
            onClick: () => console.log("i'm clicked"), // eventlinstener 등록
        }
        ,"Click me");
        const container = React.createElement("div", null,[h3,btn]) // div element 생성, 여기에는 span과 btn element가 속해있다.
        ReactDOM.render(container, root); // span을 <div id="root"></div>에 넣음
    </script>
</html>
```

## React.js JSX 문법 기초 개념 코드

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script> <!--React JS는 interactive하도록 만들어주는 library-->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> <!--React-dom library 또는 package로 React element들을 HTML body에 둘수 있도록 해준다-->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> <!--bable library-->
    <script  type="text/babel">
        const root = document.getElementById("root"); // element 생성
        /*
            #arrow function
            const name = () => ();
            
            #normal function
            function name(){
                return (<h3 id="title" onMouseEnter={() => console.log("mouse enter")}>Hello I'm a title </h3>);
            }
        */
        const Title = () =>  (<h3 id="title" onMouseEnter={() => console.log("mouse enter")}>Hello I'm a title </h3>); // JSX 스타일 코드
        const Button = () => (<button style={{backgroundColor:"tomato",}} onClick={() => console.log("i'm clicked")}>Click me</button>);

        const container = <div>
            <Title/> 
            <Button/>
        </div> // HTML 요소는 소문자로, JSX 구문으로 생성한 요소는 대문자로 시작해야한다
        ReactDOM.render(container, root); // span을 <div id="root"></div>에 넣음
    </script>
</html>
```

## 보편적인 React.js 사용 방법 코드

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script> <!--React JS는 interactive하도록 만들어주는 library-->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script> <!--React-dom library 또는 package로 React element들을 HTML body에 둘수 있도록 해준다-->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> <!--bable library-->
    <script  type="text/babel">
        const root = document.getElementById("root"); // element 생성
        function App(){

            //---Re rendering part--------
            const data = React.useState(0); //rerendering을 자동으로 하도록 코드 사용
            console.log(data); //(2) [0, ƒ] ==> [data, function]

            //---출력 값 및 업데이트 후 rendering 함수 
            let [value, function_name] = data;
            const Click_func = () => {
                value = value + 1;
                function_name(value);
                // fucntion_name(value+1)로 위 두 코드를 대체할 수 있다.
            };

            //---화면 초기 렌더링 구조------
            return(
                <div>
                    <h3>Total click: {value}</h3>
                    <button onClick={Click_func}>Click me</button>

                </div>
            )
        }
        ReactDOM.render(<App/>, root); // span을 <div id="root"></div>에 넣음 
    </script>
</html>
```

## Props

부모 컴포넌트에서 자식 컴포넌트로 데이터를 전송하는 경우 props를 이용할 수 있다.

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script> <!--React JS는 interactive하도록 만들어주는 library-->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script> <!--React-dom library 또는 package로 React element들을 HTML body에 둘수 있도록 해준다-->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> <!--bable library-->
    <script  type="text/babel">
        function Btn(props) {
            console.log(props); //object타입으로 { banana: "Continue" },{ big: true}와 같이 전달된다
            const big = props.big;
            return <button
                style={{
                    backgroundColor: "tomato",
                    color: "white",
                    padding: "10px 20px",
                    border:0,
                    borderRadius: 10,
                    fontsize: big ? 18 : 1
                }}
            >
            {props.banana}
            </button>;
        }
        
        function App(){
            return(
                <div>
                    <Btn banana="Save Canges" big={true}/>
                    <Btn banana="Continue" big={false}/>
                </div>
            )
        }
        ReactDOM.render(<App/>, root); 
    </script>
</html>
```

## Memo

props가 바뀌어(컴포넌트의 상태가 변경된다면) re-render가 이루어진다. 이때 특정 컴포넌트만 변경이 이루어진다면, 변경이 이루어지지 않는 대상은 re-reder가 이루어질 필요가 없다. 이때 사용하는 것이 react.memo()이다. reacet.memo()로 컴포넌트를 래핑하여(컴포넌트 rendering 후 결과를 memorizing) 다음  rendering이 일어날 때 props가 같다면, react는 memoizing된 내용을 재사용한다.

```html
<!DOCTYPE html>
<html>
    <body>
        <div id="root"></div>
    </body>
    <script src="https://unpkg.com/react@17.0.2/umd/react.development.js"></script> <!--React JS는 interactive하도록 만들어주는 library-->
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.development.js"></script> <!--React-dom library 또는 package로 React element들을 HTML body에 둘수 있도록 해준다-->
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> <!--bable library-->
    <script  type="text/babel">
        function Btn(props) {
            console.log(props); //object타입으로 { banana: "Continue" }와 같이 전달된다
            return (
                <button
                    onClick={props.onClick}
                    style={{
                        backgroundColor: "tomato",
                        color: "white",
                        padding: "10px 20px",
                        border:0,
                        borderRadius: 10,
                        fontsize: 18
                    }}>
                {props.banana}
                </button>
            );
        }
        
        const MemorizedBtn = React.memo(Btn); //memorized 버튼 컴포넌트
        function App(){
            const [value,setValue] = React.useState("Save Changes");
            const changeValue = () => setValue("Revert Canges");
            return(
                <div>
                    {/*onClick을 직접 만든 컴포넌트에 할당시 이벤트 리스너로 처리되지 않는다.*/}
                    <MemorizedBtn banana={value} onClick={changeValue}/>
                    <MemorizedBtn banana="Continue"/>
                </div>
            )
        }
        ReactDOM.render(<App/>, root); 
    </script>
</html>
```

## useEffect, deps

useEffect를 사용하면 지정한 코드 내용이 맨 처음 한번만 실행되도록 한다.

```jsx
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
    console.log("search keyword", keyword);
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
```

## Usestate, 이벤트 리스너

```jsx
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
  const [showing, setShowing] = useState(false) // state 값 정의, state 값 접근 함수 정의
  const onClick = () => setShowing(
    (prev) => !prev // 이벤트 리스너 동작 정의
  )
  return (
    <div>
      {showing ? <Hello /> : null} {/*조건문 활용 showing이 true이면 Hello 컴포넌트를 그렇지않다면 null 반환*/}
      <button onClick={onClick}>{showing ? "Hide":"show"}</button>
    </div>
  );
}

export default App;
```

## Array state 값 핸들링, for loop for rendering

```jsx
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
```