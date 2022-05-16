import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./detail.css";
function Detail(){

    const data_object = useParams()
    // 상태값 선언 및  상태값 변경 함수 선언
    const [loading,setLoading] = useState(true) // 데이터 로딩을 명시하기 위하여 선언
    const [movieD,setMoviesD] = useState(); // 영화 데이터 상태값을 위하여 선언
    // 장르 배열 선언
    let genres_array = [];
    // 비동기 처리를 위한 async await 사용
    // async await은 promise가 필수로 사용되는 곳에서 동작한다.
    // async는 함수에서 비동기 처리를 위한 promise 동작을 한다는 것을 명시'
    // await은 호출되는 함수가 적절한 결과를 반환할 때까지 기다리도록 동작
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${data_object.id}`)
        ).json()
        setMoviesD(json);
        setLoading(false);
    };
    // useEffect hook을 사용하여 React component가 렌더링 이후에 어떤 일을 수행할지 선언
    // useEffect를 component 내부에 둠으로써, effect를 통해 상태값에도 접근이 가능핟.
    // [] 안에 지정되는 값이 존재한다면, 해당 값이 변경될 떄마다 effect안에 선언한 동작을 수행한다.
    useEffect(() =>{
        getMovie();
    }, []);
 
    if (movieD==undefined){
        return <div>
            {loading ? (
                    <div className='loader'>
                        <h1>Loading...</h1>
                    </div>
                ) :null
                }
        </div>;
    }else{
        genres_array = movieD.data.movie.genres;
        // console.log(typeof(genres_array))
        return (
            <div>
                {loading ? (
                    <div className='loader'>
                        <h1>Loading...</h1>
                    </div>
                ) : (
                    <div className="container">
                        <div key={movieD.data.movie.index}>
                            <img src = {movieD.data.movie.medium_cover_image} />
                            <h2>Title: {movieD.data.movie.title}</h2>
                            <h3>Summary</h3>
                            <p>{movieD.data.movie.description_intro}</p>
                            <div>
                                <h3>Genres</h3>
                                {genres_array.map(
                                    (item,index) => <p>{item}</p>
                                )}
                            </div>
                            <hr />
                        </div>
                    </div>
                )
                }
            </div>
        );
    }
}

export default Detail;