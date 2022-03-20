import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

// Movie 함수는 propery를 부모 컴포넌트로 부터 받아온다
function Movie({coverImg,title,summary,genres,id}) {
    return(
        <div className={styles.movie}>
            <img src={coverImg} alt={title} className={styles.movie_img}/>
            <h2 className={styles.movie_title}>
                <Link to={`/Movie/${id}`} style={{color:"gray", marginLeft:"100px", fontSize:"20px", width:"50%"}}>
                    {title.includes(':') ? 
                        <div style={{color:"gray", marginLeft:"100px", fontSize:"20px", width:"50%"}}>
                            <p>
                                {title.substr(0,title.indexOf(':'))}
                                <br/>
                                {title.substr(title.indexOf(':'),title.length)}
                            </p>
                        </div>
                        : 
                        <div style={{color:"gray", marginLeft:"100px", fontSize:"20px", width:"60%"}}>
                            {title}
                        </div> }
                </Link>
            </h2>
            {/*영화 제목 클릭시 /Movie에 route된 컴포넌트 호출*/}
            <p>{summary.length > 235 ? `${summary.slice(0, 235)}...` : summary}</p>
            <ul className={styles.movie_genres}>
                {genres.map((g)=>(
                    <li key={g}>{g}</li>
                ))}
            </ul>
        </div>
    ); 
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.string.isRequired,
};

export default Movie;