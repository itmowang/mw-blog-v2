import type { NextApiRequest, NextApiResponse } from 'next'
// 载入prisma设置
import prisma from '../../../lib/prisma'
import verify from '../../../utils/auth';


// 分页查询文章
const list = async (req: NextApiRequest, res: NextApiResponse) => {
    // 鉴权
    const verifys = await verify(req, res) as any;
    if (verifys?.data) {
        try {
          const { page, pageSize } = req.body;
          const skip = (page - 1) * pageSize;
          const take = pageSize;
    
          const [posts, totalCount] = await Promise.all([
            prisma.post.findMany({
              skip,
              take,
              include: {
                category: true,
                tags: true,
                User: true,
              },
            }),
            prisma.post.count(), // 获取总记录数
          ]);
    
          const totalPages = Math.ceil(totalCount / pageSize); // 计算总页数
    
          res.json({
            success: true,
            message: '查询成功',
            data: {
              posts,
              totalCount,
              totalPages,
            },
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
      } else {
        res.status(401).send({ message: 'Unauthorized' });
      }
}

export default list
  