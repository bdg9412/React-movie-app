import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import "./detail.css";
function Detail(){
    // const x =useParams() //URL 인자들의 Key-value를 반환한다. 현재는 {id:"숫자"} 반환
    // console.log(x);
    // return <h1>Detail</h1>;
    const data_object = useParams()
    const [loading,setLoading] = useState(true)
    const [movieD,setMoviesD] = useState();
    let genres_array = [];
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${data_object.id}`)
        ).json()
        setMoviesD(json);
        setLoading(false);
    };
    useEffect(() =>{
        getMovie();
    }, []);
    // console.log(movieD)
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