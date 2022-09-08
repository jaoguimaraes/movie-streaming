// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../lib/prisma';

type Movie = {
  id: Number,
  title: String,
  votes: Number,
  description: String,
  duration: Number,
  image: String,
  categoryId: Number
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const movieId = req.query.id;
  const { title, votes, description, duration, image } = req.body

  if (req.method === "GET") {
    try {
      const movies = await prisma.movie.findUnique({
        where: {
          id: Number(movieId),
        },
      });
      res.status(200).json(movies);  
    } catch (error) {
      res.status(404).json(`Message: The movieId=${movieId} not found`);
    }
  } 

  if (req.method === "PUT") {
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
      });
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json("Failed to update movie");
    }
  } 
  
  if (req.method === "DELETE") {
    const movie = await prisma.movie.delete({
      where: { id: Number(movieId) }
    })
    res.status(200).json(movie);
  }

}