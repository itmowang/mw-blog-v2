import type { NextApiRequest, NextApiResponse } from 'next'
// 载入prisma设置
import prisma from '../../../lib/prisma'
import verify from '../../../utils/auth';

const getById = async (req: NextApiRequest, res: NextApiResponse) => {
    // 判断用户是否已经登录
    const verifys = await verify(req, res) as any;
    if (verifys?.data) {
        try {
            const { id } = req.body;
            const post = await prisma.post.findUnique({
                where: {
                    id: parseInt(id as string),
                },
                include: {
                    category: true,
                    tags: true,
                    User: true,
                },
            });
            res.json({
                success: true,
                message: '查询成功',
                data: post,
            });
        } catch (error) {
            console.error('Error getting posts:', error);
            res.status(500).json({
                success: false,
                message: '查询失败',
                error: error.message,
            });
        } finally {
            await prisma.$disconnect();
        }
    }else{
        res.status(401).send({ message: 'Unauthorized' })
    }
}

export default getById;