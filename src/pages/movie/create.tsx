import styles from '../../../styles/MovieCreate.module.css';

const handleCreateMovie = async (event: { preventDefault: () => void; target: any; }) => {
    event.preventDefault();
    const endpoint = '/api/movies';
    const data = {
        title: event.target.title.value,
        votes: Number(event.target.votes.value),
        description: event.target.description.value,
        duration: Number(event.target.duration.value),
        image: event.target.image.value
    }
    const movie = JSON.stringify(data);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: movie,
    }
    const response = await fetch(endpoint, options);
    const result = await response.json();
    alert(`Movie was created: ${result.title}`);
}

const CreateMovie = () => {
    return (
        <div className={styles.container}>
            <h1>Create a movie</h1>
                <form onSubmit={handleCreateMovie} method="post" className={styles.form}>
                    <input type="text" id="title" name="title" placeholder="Title" />
                    <input type="text" id="votes" name="votes" placeholder="Votes" />
                    <input type="text" id="description" name="description" placeholder="Description" />
                    <input type="text" id="duration" name="duration" placeholder="Duration" />
                    <input type="text" id="image" name="image" placeholder="Image" />
                    <p/>
                    <button type="submit">Submit</button>
                </form>
        </div>
    );
}

export default CreateMovie;