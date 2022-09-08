import styles from '../styles/Movie.module.css'

const Movie = ({ movie }) => {
    return (
        <div className={styles.grid}>
            <a className={styles.card}>
                <img src={movie.image} alt={movie.title} style={{ width: 240, height: 300 }}/>
                <h2>{ movie.title }</h2>
                <p>Description: {movie.description}</p>
                <p>Votes: {movie.votes}</p>
            </a>
        </div>
    );
};

export default Movie;