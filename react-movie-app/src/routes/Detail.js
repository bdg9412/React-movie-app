import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail(){
    // const x =useParams() //URL 인자들의 Key-value를 반환한다. 현재는 {id:"숫자"} 반환
    // console.log(x);
    // return <h1>Detail</h1>;
    const data_object = useParams()
    const [movieD,setMoviesD] = useState();
    let genres_array = [];
    const getMovie = async() => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${data_object.id}`)
        ).json()
        setMoviesD(json);
    };
    useEffect(() =>{
        getMovie();
    }, []);
    // console.log(movieD)
    if (movieD==undefined){
        return null;
    }else{
        genres_array = movieD.data.movie.genres;
        // console.log(typeof(genres_array))
        return (
            <div>
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
        );
    }
}

export default Detail;