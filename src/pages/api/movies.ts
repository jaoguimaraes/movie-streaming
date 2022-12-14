// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const { title, votes, description, duration, image } = req.body;

  if (req.method === "POST") {
    try {
      const movie = await prisma.movie.create({
        data: {
          title: title,
          votes: votes,
          description: description,
          duration: duration,
          image: image
        },
      });
      res.status(200).json(movie)
    } catch (error) {
      res.status(500).json("Failed to create movie");
    }
  }

  if (req.method === "GET") {
    const movies = await prisma.movie.findMany();
    res.status(200).json(movies);
  }
}