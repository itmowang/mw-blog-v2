import type { NextApiRequest, NextApiResponse } from 'next'
// 载入prisma设置
import prisma from '../../../lib/prisma'
// 查询分类接口
 const getCategory = async (req: NextApiRequest, res: NextApiResponse) => {
    const categories = await prisma.category.findMany();
    res.json({
      data: categories,
      success: true,
    })
  }
  
  export default getCategory