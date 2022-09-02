// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma';

type Movie = {
  id: Number,
  title: String,
  votes: Number,
  description: String,
  duration: Number,
  image: String
}

export default async function handler(req: NextApiRequest, res: NextApiResponse){
	const {id, title, votes, description, duration, image} = req.body

  if (req.method === "POST") {
    try {
      const movie = await prisma.movie.create({
        data: {
          id: id,
          title: title,
          votes: votes,
          description: description,
          duration: duration,
          image: image
        }
      })
      res.status(200).json(movie)
    } catch (error) {
      console.log("Failure");
    }
  }

  if (req.method === "GET") {
    const movies = await prisma.movie.findMany();
    res.status(200).json(movies)
  }
}