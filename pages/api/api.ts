// 载入prisma设置
import prisma from '../../lib/prisma'
export const getCommonData = async () => {
  const categories = await prisma.category.findMany();
  const latestPosts = await prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    take: 10,
  });
  const totalPosts = await prisma.post.count();
  const totalTags = await prisma.tags.count();
  const siteInfo = {
    totalPosts,
    totalPages: Math.ceil(totalPosts / 10),
    totalTags,
  };
  const author = await prisma.user.findMany({
    where: {}
  });
  const authorInfo = author;
  return {
    categories,
    latestPosts,
    siteInfo,
    authorInfo,
  };
};


// 登录
// Path: api\api.ts
export const login = async (email: string, password: string) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  } as any);
  if (!user) {
    return {
      success: false,
      message: '用户不存在',
    };
  }
  if (user.password !== password) {
    return {
      success: false,
      message: '密码错误',
    };
  }
  return {
    success: true,
    message: '登录成功',
  };
}
