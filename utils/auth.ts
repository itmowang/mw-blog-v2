// 载入prisma设置
import { NextApiRequest, NextApiResponse } from 'next'; 
import jwt from 'jsonwebtoken' 

// 鉴权接口
const verify = async (req: NextApiRequest, res: NextApiResponse) => {
    // jwt 解析token
    const token = req?.headers?.token as string;
    if(token){
        const decoded = jwt.verify(token, 'secret');
        return {  data: decoded };
    }else{
      return{ data : null};
    }
}

export default verify