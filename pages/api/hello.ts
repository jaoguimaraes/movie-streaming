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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>
) {
  const movies = await prisma.movie.findMany();
  res.status(200).json("asdasd");
}
