import router from "next/router"

interface SiteInfo {
    totalPages: number
    totalPosts: number
    totalTags: number
}
interface AuthorInfo {
    id: number
    name: string
    email: string
}
interface Info {
    siteInfo: SiteInfo
    authorInfo: AuthorInfo[]
    latestPosts: {
        id: number
        title: string
    }[]
}



// 站长信息
export const LeftUserInfo: React.FC<{
    info: Info
}> = ({ info }) => {
    const { siteInfo } = info
    return (
        <div className="userInfo h-32 bg-white shadow-lg rounded-lg p-4 mb-4 flex items-center w-full">
            {/* 用户头像 */}
            <div className="w-24 h-24">
                <img src={'https://www.wdssmq.com/zb_users/avatar/1.png'} className="w-24 h-24" />
            </div>
            <div className="w-3/5">
                <div className="flex justify-center mb-2 text"> 魔王 </div>
                <div className="flex justify-between ml-2 text-xs">
                    <div className="mx-1">
                        <div className="text-sm	text-gray-500 font-bold hover:text-sky-500">文章</div>
                        <div className="text-center text-sky-500 font-bold text-sm ">{siteInfo.totalPosts}</div>
                    </div>
                    <div className="mx-1">
                        <div className="text-sm	text-gray-500 font-bold hover:text-sky-500">页码</div>
                        <div className="text-center text-sky-500 font-bold text-sm">{siteInfo.totalPages}</div>
                    </div>
                    <div className="mx-1">
                        <div className="text-sm	text-gray-500 font-bold hover:text-sky-500">TAG</div>
                        <div className="text-center text-sky-500 font-bold text-sm	">{siteInfo.totalTags}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 联系方式
export const ContactInfo: React.FC<{
    info: Info
}> = ({ info }) => {
    return (
        <div className="contactInfo bg-white shadow-lg rounded-lg p-4 mb-4 ">
            <div className="text-sm text-gray-500 font-bold hover:text-sky-500 cursor-pointer truncate"> <i className="iconfont icon-QQ text-sky-500	" ></i> 1531780018</div>
            {/* 分割线 */}
            <div className=' w-full my-2 px-4 ' style={{ borderBottom: '1px solid #eee' }}></div>
            <div className="text-sm text-gray-500 font-bold hover:text-sky-500 cursor-pointer truncate"> <i className="iconfont icon-wechat-fill text-sky-500	" ></i> 1531780018</div>
            {/* 分割线 */}
            <div className=' w-full my-2 px-4 ' style={{ borderBottom: '1px solid #eee' }}></div>
            <div className="text-sm text-gray-500 font-bold hover:text-sky-500 cursor-pointer truncate"> <i className="iconfont icon-twitter text-sky-500	" ></i> 1531780018</div>
            {/* 分割线 */}
            <div className=' w-full my-2 px-4 ' style={{ borderBottom: '1px solid #eee' }}></div>
            <div className="text-sm text-gray-500 font-bold hover:text-sky-500 cursor-pointer truncate"> <i className="iconfont icon-github-fill text-sky-500	" ></i> 1531780018</div>
        </div>
    )
}

// 最近发表
export const RecentPosts: React.FC<{
    info: Info
}> = ({ info }) => {
    const { latestPosts } = info
    // 跳转至内容页面
    const toPost = (data) => {
        router.push(`/p/${data.id}`)
    }
    return (
        <div className="recentPosts bg-white shadow-lg rounded-lg p-4 mb-4">
            <p className="my-2">最近发表</p>
            {
                latestPosts.map((item, index) => {
                    return (<div className="my-1" key={index}>
                        <div className="indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer truncate" onClick={() => toPost(item)}>  {item.title}</div>
                        {/* 分割线 */}
                        <div className=' w-full my px-4 mt-1' style={{ borderBottom: '1px solid #eee' }}></div>
                    </div>)
                })
            }
        </div>
    )
}

// 站点信息
export const SiteInfo: React.FC<{
    info: Info
}> = ({ info }) => {
    const { siteInfo } = info
    return (
        <div className="siteInfo bg-white shadow-lg rounded-lg p-4 mb-4">
            <p className="my-2">站点信息</p>
            {
                <div className="my-1" >
                    <div className="indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer">
                        <span className="text-gray-600 hover:text-sky-500 cursor-pointer"> 文章总数 </span>: {siteInfo.totalPosts}
                    </div>
                    <div className="indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer">
                        <span className="text-gray-600 hover:text-sky-500 cursor-pointer"> 页面总数 </span>: {siteInfo.totalPages}
                    </div>
                    <div className="indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer">
                        <span className="text-gray-600 hover:text-sky-500 cursor-pointer"> 标签总数 </span>: {siteInfo.totalTags}
                    </div>
                    <div className="indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer">
                        <span className="text-gray-600 hover:text-sky-500 cursor-pointer"> 评论总数 </span>: 999
                    </div>
                    <div className="indent-1 text-vase  text-neutral-500  hover:text-sky-500 cursor-pointer">
                        <span className="text-gray-600 hover:text-sky-500 cursor-pointer"> 浏览总数 </span>: 999
                    </div>
                </div>
            }
        </div>
    )
}

// 赞助商
export const Sponsor: React.FC<{
}> = ({ }) => {
    return (
        <div className='sponsor bg-white shadow-lg rounded-lg p-4 mb-4 cursor-pointer'>
            服务器供应商：阿里云
        </div>
    )
}