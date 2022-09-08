import styles from '../styles/Movie.module.css'

const Movie = ({ movie }) => {
    return (
        <div className={styles.grid}>
            <a className={styles.card}>
                <img className={styles.image} src={movie.image} alt={movie.title}/>
                <h2>{ movie.title }</h2>
                <p>Description: {movie.description}</p>
                <p>Votes: {movie.votes}</p>
            </a>
        </div>
    );
};

export default Movie;