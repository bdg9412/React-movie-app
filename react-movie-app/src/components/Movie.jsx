import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// Movie 함수는 propery를 부모 컴포넌트로 부터 받아온다
function Movie({coverImg,title,summary,genres,id}) {
    return(
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/Movie/${id}`}>{title}</Link>
                {/*영화 제목 클릭시 /Movie에 route된 컴포넌트 호출*/}
            </h2>
            <p>{summary}</p>
            <ul>
                {genres.map((g)=>(
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <hr />
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