import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Movie from '../../components/Movie'
import styles from '../../styles/Home.module.css'

export type MovieProps = {
  id: number,
  title: string,
  votes: number,
  description: string,
  duration: number,
  image: string
}

type Props = {
  movies: MovieProps[];
};

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch(`${process.env.URL}/api/movies`);
  const movies = await response.json();
  return {
    props: {
      movies
    }
  }
}

const Home: NextPage<Props> = (props: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>MovieStreaming</title>
        <meta name="description" content="Your movie streaming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.grid}>
          { props.movies.map((movie) => {     
            return (<Movie key={String(movie.id)} movie={movie} />) 
          }) }
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
