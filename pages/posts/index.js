import MainLayout from "../../layouts/MainLayout";
import React, {useEffect, useState} from "react";
import Link from "next/link";

export default function Posts(props) {
    // const [posts, setPosts] = useState([])
    // const loadData = async () => {
    //     const response = await fetch('http://localhost:4200/posts')
    //     const data = await response.json()
    //     setPosts(data)
    // }
    //
    // useEffect(() => {
    //     loadData()
    // }, [])

    console.log('props', props)

    return (
        <MainLayout title={'All posts'}>
            <pre>
                {props.posts.map(post => (
                    <li>
                        <Link href={`/posts/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                ))}
                {/*{JSON.stringify([props.posts], null, 2)}*/}
            </pre>
        </MainLayout>
    )
}

Posts.getInitialProps = async (ctx) => {
    console.log('ctx', ctx)

    const response = await fetch('http://localhost:4200/posts')
    const posts = await response.json()

    console.log('posts', posts)

    return {
        posts
    }
}