import React, { useState } from 'react';

const PAGE_SIZE = 10; // 每页显示的文章数量

// 模拟的文章数据
const mockArticles = [
  { id: 1, title: '文章1', content: '这是文章1的内容' },
  { id: 2, title: '文章2', content: '这是文章2的内容' },
  { id: 3, title: '文章3', content: '这是文章3的内容' },
  // ...更多文章数据
];

const AdminPage: React.FC = (props) => {
  const [currentPage, setCurrentPage] = useState(1);

  // 根据当前页码计算起始索引和结束索引
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  // 获取当前页的文章数据
  const currentArticles = mockArticles.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col min-h-screen bg-pink-500">
      <h1 className="text-4xl font-bold text-white">管理文章</h1>
      <div className="mt-8">
        {currentArticles.map((article) => (
          <div key={article.id} className="p-4 mb-4 bg-white rounded">
            <h2 className="text-xl font-bold">{article.title}</h2>
            <p>{article.content}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(mockArticles.length / PAGE_SIZE) }, (_, index) => index + 1).map((page) => (
          <button
            key={page}
            className={`px-4 py-2 mx-2 text-white bg-pink-700 rounded ${
              page === currentPage ? 'bg-pink-900' : ''
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