import React, { useEffect, useState } from 'react';
import axios from '../../utils/fetch' 
import { useRouter } from 'next/router';

const PAGE_SIZE = 10; // 每页显示的文章数量

const AdminPage: React.FC = (props) => {
  const [postList,setPostList] = useState([])
  const [totalPage,setTotalPage] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter(); 
  // 根据当前页码计算起始索引和结束索引
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  useEffect(() => {
    // 在组件挂载后执行默认查询
    query(currentPage);
  }, []);

  const query = async (page:number) =>{
    const res = await axios.post('/api/post/list', {
      page,
      pageSize:PAGE_SIZE
    })
    if(res.data.success){
        setPostList(res.data.data?.posts)
        setTotalPage(res.data.data?.totalCount)
    } 
  }
 
  const editTo = (article:any) =>{
    router.push(`/admin/edit?isedit=edit&id=${article.id}`);
  }

  const handlePageChange = (page: number) => {
    query(page);
  };

  return (
    <div className="flex flex-col min-h-screen bg-pink-500 p-8">
      <h1 className="text-4xl font-bold text-white">管理文章</h1>
      <div className="mt-8">
        {postList.map((article) => (
          <div key={article.id} className="p-4 mb-4 bg-white rounded flex justify-between items-center	">
            <div>  <h2 className="text-xl font-bold">{article.title}</h2>
              <p className='mt-2'>{article?.category?.name}</p>
            </div>
            {/* 跳转按钮 */}
            <button className="px-4 py-2 mt-4 text-white bg-pink-700 rounded" onClick={()=>editTo(article)} >编辑</button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(totalPage/ PAGE_SIZE) }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`px-4 py-2 mx-2 text-white bg-pink-700 rounded ${page === currentPage ? 'bg-pink-900' : ''
              }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AdminPage;