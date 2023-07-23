import React from 'react';
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
// 载入prisma设置
import prisma from '../lib/prisma'
// 引用header
import Header from '../components/Header'
// 引用footer
import Footer from '../components/Footer'
// 引用分页
import Pagination from '../components/Pagination';
// 其他
import { LeftUserInfo, ContactInfo, RecentPosts, SiteInfo,Sponsor } from '../components/Layout';
// 引用api 
import { getCommonData } from './api/api'
// 引用router
import { useRouter } from 'next/router';
// 引用工具
import { getFirstImg ,getDesc} from '../utils/utils'

type Props = {
    feed: any
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { page = 1, limit = 10 } = query;
    const offset = (Number(page) - 1) * Number(limit);
    const feed = await prisma.post.findMany({
        orderBy: { createdAt: 'desc' }, skip: offset, take: Number(limit),
    });
    const totalPosts = await prisma.post.count();
    const getCommData = await getCommonData();
    return {
        props:
        {
            feed: feed.map((post) => ({ ...post, createdAt: post.createdAt.toISOString(), })),
            currentPage: Number(page),
            totalPages: Math.ceil(totalPosts / Number(limit)),
            info: {
                categories: JSON.parse(JSON.stringify(getCommData.categories)),
                latestPosts: JSON.parse(JSON.stringify(getCommData.latestPosts)),
                siteInfo: JSON.parse(JSON.stringify(getCommData.siteInfo)),
                authorInfo: JSON.parse(JSON.stringify(getCommData.authorInfo))
            }
        },
    };
};

const Blog: React.FC<Props> = (props: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    const router = useRouter()
    const { feed, currentPage, totalPages, info } = props

    // 跳转至内容页面
    const toPost = (data) => {
        router.push(`/p/${data.id}`)
    }
    // 跳转页码
    const onPage = (page) => {
        router.push(`/?page=${page}`)
    }
    return <div>
        <Header categories={info.categories} />
        <div className=' p-2 bg-default flex w-full'>
            {/* 左侧显示 */}
            <div className='w-1/4 leftMenu' >
                <LeftUserInfo info={info} />
                <ContactInfo info={info} />
                <RecentPosts info={info} />
                <SiteInfo info={info} />
                <Sponsor/>
            </div>
            {/* 列表 */}
            <div className='w-full ml-4 '>
                <div className="w-full   ">
                    {
                        feed.map((post, key) => {
                            const backgroundImage = getFirstImg(post.content) ? `${getFirstImg(post.content)}` : 'https://www.wdssmq.com/zb_users/theme/acgMora/var/noimg/2.webp';
                            return (
                                <div key={key} className='bg-white shadow-lg rounded-lg p-2 mb-4 cursor-pointer' onClick={() => toPost(post)}>
                                    <div className={` bg-cover bg-center h-[150px] bg-cover`} style={{ backgroundImage: `url(${backgroundImage})` }} ></div>
                                    <div className='text-lg text-zinc-600 my-1 font-medium hover:text-sky-500'> {post.title} </div>
                                    <div className='text-zinc-400'><span className='text-sky-500'> #冷笑话 </span> <span className='text-sky-500'> #吐槽 </span>  { getDesc(post.content) } </div>
                                    <div className='text-xs text-slate-400 mt-2'>
                                        <span className='hover:text-sky-500'> <i className="iconfont icon-message  text-sm" ></i> 评论数 : 1000+ </span>
                                        <span className='hover:text-sky-500'> <i className="iconfont icon-team  text-sm ml-4" ></i> 浏览量 : 1000+ </span>
                                    </div>
                                </div>
                            )
                        })

                    }

                </div>
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPage} />
            </div>
        </div>
        <Footer />
    </div>
}

export default Blog;