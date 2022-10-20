import {useRouter} from "next/router";
import React from "react";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";

export default function Post({post}) {
    // const {query} = useRouter()
    //
    // console.log('query', query)

    return <MainLayout>
        <h1>{post.title}</h1>
        <hr/>
        <Link href={'/posts'}><a>Back to the all posts</a></Link>
    </MainLayout>
}

Post.getInitialProps = async (ctx) => {

    console.log('ctx post', ctx)

    const response = await fetch('http://localhost:4200/posts/' + ctx.query.postId)
    const post = await response.json()

    return {
        post
    }
}