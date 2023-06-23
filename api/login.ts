import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../lib/prisma'

export default async function login(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;
    if (email) {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        } as any);
        res.json(user);
    } else {
        res.status(401).send({ message: 'Unauthorized' })
    }
}
