// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

type Movie = {
  id: Number,
  title: String,
  votes: Number,
  description: String,
  duration: Number,
  image: String
}

export default async function handler(
  req: NextApiRequest, res: NextApiResponse){
	const movieId = req.query.id
  const { title, votes, description, duration, image } = req.body

  if (req.method === 'PUT') {
    try {
      const movie = await prisma.movie.update({
        where: { id: Number(movieId) },
        data: { 
          title: title,
          votes: votes,
          description: description,
          duration: duration,
          image: image 
        }
      })
      res.status(200).json(movie)
    } catch (error) {
      console.log("Failed to update movie")
    }
  }

	if (req.method === "DELETE") {
		const movie = await prisma.movie.delete({
			where: { id: Number(movieId) }
		})
		res.status(204).json(movie)
  }

  if (req.method === "GET") {
    const movies = await prisma.movie.findUnique({
      where: {
        id: Number(movieId),
      },
    })

    res.status(200).json(movies)
  }
}