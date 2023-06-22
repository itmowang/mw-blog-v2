import NextAuth from "next-auth";
import GithubProbiders from "next-auth/providers/github";

// Next github鉴权登录
export default NextAuth({
  providers: [
    GithubProbiders({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ]
});