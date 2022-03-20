import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return(
    <Router>
      <Routes>
        <Route path = "/about-us"
          element={<h1>Hello</h1>}/>
        <Route path = "/Movie/:id" element={<Detail/>}/>
        <Route path = "/"  element={<Home/>}/> {/*URL 주소가 '/' 일때 Home 컴포넌트 접근*/}
      </Routes>
    </Router>
  );
}

export default App;
