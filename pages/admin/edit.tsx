import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import 'react-quill/dist/quill.snow.css';
import { useRouter } from 'next/router';
import axios from "../../utils/fetch"

const CreatePage: React.FC = (props) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [cateId, setCateId] = useState('');
  // 获取url内参数
  const router = useRouter();
  // 请求接口获取分类数据
  const [categories, setCategories] = useState([]);
  // 获取url内参数  
  const onLoad = async () => {
    const res = await fetch('/api/appliction/getCategory');
    const result = await res.json();
    setCategories(result.data);
  };
  const { isedit, id } = router.query;

  const queryDetail = async () => {
    const res = await axios.post('/api/post/getId', {
      id: id
    })

    if (res.status == 200 && res.data.success) {
      setTitle(res.data.data.title)
      setContent(res.data.data.content)
      setCateId(res.data.data.categoryId)
    }
  }

  useEffect(() => {
    onLoad();
    if (isedit == 'edit') {
      queryDetail()
    }
  }, [isedit]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value: string) => {
    setContent(value);
  };


  const handleSubmit = async () => {
    if (isedit == 'edit') {
      // 处理编辑逻辑
      const res = await axios.post('/api/post/updateSave', {
        id: id,
        title: title,
        content: content,
        cateId: cateId,
      })
      if (res.status == 200 && res.data.success) {
        alert('修改成功')
        // 返回文章列表
        router.push('/admin/manage')
      }
    } else {
      // 处理创建逻辑
      const res = await axios.post('/api/post/save', {
        title: title,
        content: content,
        cateId: cateId,
      })
      if (res.status == 200 && res.data.success) {
        alert('创建成功')
        // 返回文章列表
        router.push('/admin/manage')
      } else {
        alert(res.data.message)
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen items-center bg-pink-300 p-6">
      <h1 className="text-4xl font-bold text-white">{isedit == 'add' ? '创建文章' : "修改文章"}</h1>
      <div className="mt-8 w-1/2">
        <input
          type="text"
          placeholder="标题"
          value={title}
          onChange={handleTitleChange}
          className="px-4 py-2 text-gray-800 bg-white rounded w-full"
        />
        {/* 选择分类 */}
        <div className="mt-4">
          <select value={cateId} className="px-4 py-2 text-gray-800 bg-white rounded w-full"
            onChange={(e) => {
              setCateId(e.target.value);
            }}
          >
            <option value="">请选择分类</option>
            {
              categories.map((item, index) => {
                return <option key={index} value={item.id}>{item.name}</option>
              }
              )
            }
          </select>
        </div>

        <div className='bg-white min-h-full pb-12 mt-4 '>
          <ReactQuill
            value={content}
            onChange={handleContentChange}
            style={{ height: '300px' }}
            modules={{
              toolbar: [
                [{ header: [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ list: 'ordered' }, { list: 'bullet' }],
                ['link', 'image'],
                ['clean'],
              ],
            }}
          />
        </div>

        <button className="px-4 py-2 mt-4 text-white bg-pink-700 rounded" onClick={handleSubmit}>
          创建
        </button>
      </div>
    </div>
  );
};

export default CreatePage;