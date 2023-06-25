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


// 保存文章到Post
export const savePost = async (post) => {
  const newPost = await prisma.post.create({
    title: post.title,
    content: post.content,
  });
  return newPost;
}
