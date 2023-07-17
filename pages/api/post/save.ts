import type { NextApiRequest, NextApiResponse } from 'next'
// 载入prisma设置
import prisma from '../../../lib/prisma'
import verify from '../../../utils/auth';

// 保存文章 
const save = async (req: NextApiRequest, res: NextApiResponse) => {
    // 验证用户是否登录
    const verifys = await verify(req, res) as any;
    const { title, content, cateId } = req.body;
    if (!title || !content) {
        res.status(400).send({ message: 'Unauthorized' })
    } else {
        // 鉴权
        if (verifys?.data) {
            // 通过邮箱查询用户id
            const user = await prisma.user.findUnique({
                where: {
                    email: verifys.data?.email
                },
            } as any);
            const post = await prisma.post.create({
                data: {
                    title,
                    content,
                    categoryId: parseInt(cateId),
                    published: false,
                    authorId: user.id,
                },
            } as any);
            if (post) {
                res.json({
                    success: true,
                    message: '保存成功',
                    data: post
                });
            } else {
                res.json({
                    success: false,
                    message: '保存失败',
                    data: ""
                });
            }
        } else {
            res.status(401).send({ message: 'Unauthorized' })
        }

    }
}

export default save