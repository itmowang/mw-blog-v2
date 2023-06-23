import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function Login(req: NextApiRequest, res: NextApiResponse) {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(401).send({ message: 'Unauthorized' })
    } else {
        const user = await prisma.user.findUnique({
            where: {
                email
            },
        } as any);
        if (!user) {
           res.json({
                success: false,
                message: '用户不存在',
           })
        }
        if (user.password !== password) {
            res.json({
                success: false,
                message: '密码错误',
            })
        }
        res.json({
            success: true,
            message: '登录成功',
            data: user
        });
    }
}
