import { GetServerSideProps, NextPage } from 'next';
import Router from 'next/router';
import { useState } from 'react';
import styles from '../../../../styles/MovieCreate.module.css';


const getImageUrl = (imageUrl: string) => {
    const pathDefaultImage = 'https://upload.wikimedia.org/wikipedia/commons/a/af/Question_mark.png';
    return isValidUrl(imageUrl)
        ? imageUrl 
        : pathDefaultImage;
}

const isValidUrl = (url: string) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(url);
}

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

const EditMovie: NextPage<Props> = (props: Props) => {
    const [title, setTitle] = useState(props.movie.title);
    const [votes, setVotes] = useState(props.movie.votes);
    const [description, setDescription] = useState(props.movie.description);
    const [duration, setDuration] = useState(props.movie.duration);
    const [image, setImage] = useState(props.movie.image);

    const handleEditMovie = async (event: { preventDefault: () => void; target: any; }) => {
        event.preventDefault();
        const endpoint = `/api/movies/${props.movie.id}`;
        const data = {
            title: event.target.title.value,
            votes: Number(event.target.votes.value),
            description: event.target.description.value,
            duration: Number(event.target.duration.value),
            image: getImageUrl(event.target.image.value)
        }
        const movie = JSON.stringify(data);
        const options = {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: movie,
        }
        const response = await fetch(endpoint, options);
        const result = await response.json();
        Router.push('/');
        alert("Movie edited with success");
    }

    return (
        <div className={styles.container}>
            <h1>Edit the movie</h1>
            <form onSubmit={handleEditMovie} method="post" className={styles.form}>
                <input 
                    type="text" 
                    id="title" 
                    name="title" 
                    placeholder="Title" 
                    value={ title }
                    onChange={(event) => setTitle(event.target.value)}
                />
                <input 
                    type="text" 
                    id="votes" 
                    name="votes" 
                    placeholder="Votes" 
                    value={ votes }
                    onChange={(event) => setVotes(Number(event.target.value))}
                />
                <input 
                    type="text" 
                    id="description" 
                    name="description" 
                     placeholder="Description" 
                     value={ description }
                     onChange={(event) => setDescription(event.target.value)}
                />
                <input 
                    type="text" 
                    id="duration" 
                    name="duration" 
                    placeholder="Duration" 
                    value={ duration }
                    onChange={(event) => setDuration(Number(event.target.value))}
                />
                <input 
                    type="text" 
                    id="image" 
                    name="image" 
                    placeholder="Image" 
                    value={ image }
                    onChange={(event) => setImage(event.target.value)}
                />
                <p/>
                <button type="submit">Edit</button>
            </form>
        </div>
    );
}

export default EditMovie;