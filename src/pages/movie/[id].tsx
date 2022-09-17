import React from "react";
import Error from 'next/error'
import styles from '../../../styles/MovieCard.module.css';
import { GetServerSideProps } from "next";

export type MovieProps = {
    id: number,
    title: string,
    votes: number,
    description: string,
    duration: number,
    image: string
}

type Props = {
    movie: MovieProps;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id;
    const response = await fetch(`http://localhost:3000/api/movies/${id}`);
    const movie = await response.json();
    return {
        props: {
            movie
        }
    }
} 

const Movie: React.FC<Props> = (props) => {
    if (props?.movie === null) {
        return <Error statusCode={404} />
    }
    return (
        <div className={styles.container}>
            <img className={styles.banner} src={props.movie.image} alt={props.movie.title}/>
            <h2>{props.movie.title}</h2>
            <p>Description: {props.movie.description}</p>
            <p>Votes: {props.movie.votes}</p>
        </div>
    );
}

export default Movie