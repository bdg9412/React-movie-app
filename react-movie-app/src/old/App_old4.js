import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function App() {
  // url 주소 routing으로 아래는 주석 처리
  // const [loading, setLoading] = useState(true);
  // const [movies, setMovies] = useState([]);
  
  // // fetch - async - await
  // const getMovies = async() => {
  //   const response = await fetch(
  //     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  //   );
  //   const json = await response.json();
  //   setMovies(json.data.movies);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   getMovies();
  // }, []);

  // fetch - then()
  // // useEffect를 이용하여 api 송신 및 데이터 할당을 맨 처음 한번만 수행하도록 한다.
  // useEffect(
  //   () => {
  //     fetch(
  //       `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
  //     ).then(
  //       (response) => response.json()
  //       ).then(
  //         (json) => {
  //           setMovies(json.data.movies);
  //           setLoading(false);
  //         }
  //       );
  //   },
  //   [] // deps, 이곳에 설정한 값이 변화할때만 re-rendering 수행, 값이 아무것도 없다면 해당 코드는 맨 처음 한번만 실행
  // )

  // // 모듈화 전 return
  // return(
  //   <div>
  //     {loading ? <h1>Loading...</h1> : 
  //     <div>
  //       {movies.map(
  //         (item,index) => 
  //         <div key={index}>
  //           <img src = {item.medium_cover_image} />
  //           <h2>Title: {item.title}</h2>
  //           <p>Summary</p>
  //           <p>{item.summary}</p>
  //           <ul>
  //             {item.genres.map(
  //               (g) => {
  //                 <li key={g}>{g}</li>
  //               }
  //               )}
  //           </ul>
  //           <hr />
  //         </div>
  //       )}
  //     </div>
  //     }
  //   </div>
  // );

  // // 모듈화 한 return
  // return(
  //   <div>
  //     {loading ? (
  //       <h1>Loading...</h1>
  //     ):(
  //       <div>
  //         {movies.map((item) =>(
  //           <Movie 
  //           coverImg={item.medium_cover_image}
  //           key={item.id}
  //           title={item.title}
  //           summary={item.summary}
  //           genres={item.genres}
  //           /> 
  //         ))}
  //         {/*python에서 함수에 인자를 전달하듯, class에서 __init__에 인자를 전달하여 설정하듯
  //         import한 모듈에 property를 전달할때 위 처럼 prop = 값 으로 전달한다
  //         */}
  //       </div>
  //     )}
  //   </div>
  // )
  return null;
}


export default App;
