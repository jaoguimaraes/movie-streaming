// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

type Movie = {
  id: Number,
  title: String,
  votes: Number,
  description: String,
  duration: Number,
  image: String
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[]>
) {
  
  const movie = await prisma.movie.create({
    data: {
      title: '',
      votes: 123,
      description: 'Test',
      duration: 1234,
      image: 'Test'
    },
  });

  const movies = await prisma.movie.findMany();
  
  res.status(200).json(movies);
}
