import { NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt';

// 检查用户是否登录
export const checkAuth = async(req, ev) => {
    // 获取token
    const token = await getToken({ req, secret: process.env.SECRET });
    // 如果没有token，重定向到登录页面
    if (!token) {
        return NextResponse.redirect("/login");
    }
    // 如果有token，继续执行
    return NextResponse.next();
}