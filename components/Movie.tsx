import styles from '../styles/Movie.module.css'
import Link from 'next/link';

const Movie = ({ movie }) => {
    return (
        <div className={styles.grid}>
            
            <Link href={`/movie/${movie.id}`}>
            <a className={styles.card}>
                <img className={styles.image} src={movie.image} alt={movie.title}/>
                <h2 className={styles.title}>{ movie.title }</h2>
                <p className={styles.description}>Description: {movie.description}</p>
                <p className={styles.votes}>Votes: {movie.votes}</p>
            </a>
            </Link>
        </div>
    );
};

export default Movie;