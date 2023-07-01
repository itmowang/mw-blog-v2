import type { NextApiRequest, NextApiResponse } from 'next'
// 载入prisma设置
import prisma from '../../../lib/prisma'

// 保存文章 
 const save = async (req: NextApiRequest, res: NextApiResponse) => {
     const { title, content ,cateId } = req.body;
        if (!title || !content) {
            res.status(401).send({ message: 'Unauthorized' })
        }else{
            const post = await prisma.post.create({
                data: {
                    title,
                    content,
                    categoryId: cateId
                },
            } as any);
            res.json({
                success: true,
                message: '保存成功',
                data: post
            });
        }
  }
  
  export default save