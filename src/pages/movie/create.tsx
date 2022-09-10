const handleCreateMovie = async (event) => {
    event.preventDefault();
    const endpoint = '/api/movies';
    const data = event.target as typeof event.target & {
        title: { value: string };
        votes: { value: number };
        description: { value: string };
        duration: { value: number };
        image: { value: string };
    };
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
        <div>
            <h1>Create a movie</h1>
            <form onSubmit={handleCreateMovie} method="post">
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" />

                <label htmlFor="votes">Votes:</label>
                <input type="text" id="votes" name="votes" />

                <label htmlFor="description">Description:</label>
                <input type="text" id="description" name="description" />

                <label htmlFor="duration">Duration:</label>
                <input type="text" id="duration" name="duration" />

                <label htmlFor="image">Image:</label>
                <input type="text" id="image" name="image" />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreateMovie;