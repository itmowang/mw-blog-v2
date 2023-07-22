import React from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
// 载入prisma设置
import prisma from '../../lib/prisma'
// 引用header
import Header from '../../components/Header'
// 引用footer
import Footer from '../../components/Footer'
// 引用api 
import { getCommonData } from '../api/api'

import { LeftUserInfo, ContactInfo, RecentPosts, SiteInfo } from '../../components/Layout';

type Props = {
    feed: any
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { id } = query;
    const getCommData = await getCommonData();
    const relatedPosts = await prisma.post.findUnique({
        where: { id: parseInt(id as string) },
        include: {
            category: true,
            tags: true,
            User: {
                select: {
                    id: true,
                    name: true,
                    email: true,
                  },
            },
        },
    });
    return {
        props:
            JSON.parse(JSON.stringify({
                posts: relatedPosts,
                info: {
                    categories: getCommData.categories,
                    latestPosts: getCommData.latestPosts,
                    siteInfo: getCommData.siteInfo,
                    authorInfo: getCommData.authorInfo
                }
            })),
    };
};

const HomePosts: React.FC<Props> = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const { info, posts } = props;
    console.log(posts);
    
    return <div>
        <Header categories={info.categories} />
        <div className='h-[1000px] p-2 bg-default flex w-full'>
            {/* 左侧显示 */}
            <div className='w-1/4' >
                <LeftUserInfo info={info} />
                <ContactInfo info={info} />
                <RecentPosts info={info} />
                <SiteInfo info={info} />
            </div>
            {/* blog文章内容 */}
            <div className='w-full ml-4 '>
                <div className="w-full h-[850px] bg-white shadow-lg rounded-lg p-2 mb-8">
                    <p className='text-left text-3xl leading-10  my-2' style={{ color: 'hsl(0deg,0%,21%)' }} >
                        {posts.title}
                    </p>
                    <div className='flex indent-2 text-slate-500	'>
                        <div> <span className='cursor-pointer'>{posts?.User?.name}</span> / <span className='cursor-pointer'> {posts?.category?.name} </span> / <span className='cursor-pointer'>  0条留言 </span> / <span className='cursor-pointer'> 20次浏览 </span> / <span className='cursor-pointer'> 2天前 </span> </div>
                    </div>
                    {/* 分割线 */}
                    <div className=' w-full my-2 px-4 ' style={{ borderBottom: '1px solid #eee' }}></div>
                    {/* MD展示 */}
                    <div>
                        <div className='markdown-body' dangerouslySetInnerHTML={{ __html: posts.content }}></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default HomePosts;