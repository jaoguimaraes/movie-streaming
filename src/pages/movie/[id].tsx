import React from "react";
import Error from 'next/error'
import styles from '../../../styles/MovieCard.module.css';
import { GetServerSideProps } from "next";
import Router from "next/router";

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

const handleDeleteMovie = async (id: number) => {
    const endpoint = `/api/movies/${id}`;
    const response = await fetch(endpoint, { method: "DELETE" });
    Router.push('/');
    alert(`Movie deleted with success`);
}

const handleEditMovie = async (id: number) => {
    Router.push(`/movie/edit/${id}`);
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    const id = params?.id;
    const response = await fetch(`${process.env.URL}/api/movies/${id}`);
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
            <div>
                <button className={ styles.handleButtons } onClick={() => handleDeleteMovie(props.movie.id)}>Delete</button>
                <button className={ styles.handleButtons } onClick={() => handleEditMovie(props.movie.id)}>Edit</button>
            </div>            
        </div>
    );
}

export default Movie