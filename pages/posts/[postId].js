import {useRouter} from "next/router";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import MainLayout from "../../layouts/MainLayout";

export default function Post({serverPost}) {
    const [frontPost, setFrontPost] = useState(serverPost)
    const {query} = useRouter()

    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts/' + query.postId)
            const data = await response.json()
            console.log('data', data)
            setFrontPost(data)
        }

        // если с сервера пришел null, запускаем фронтовый запрос
        if (!serverPost) {
            load()
        }
    }, [])

    if (!frontPost) {
        return <MainLayout>
            Loading...
        </MainLayout>
    }

    return <MainLayout>
        <h1>{frontPost.title}</h1>
        <hr/>
        <Link href={'/posts'}><a>Back to the all posts</a></Link>
    </MainLayout>
}

Post.getInitialProps = async ({query, req}) => {
    // генерация постов на стороне сервера

    /*
    * getInitialProps срабатывает на стороне сервера единожды
    * тогда у него есть объект req
    * в дальнейшем он срабатывает на стороне фронта и объект req
    * отсутствует
    * */
    console.log('request object', req)

    const isStartToFront = !req

    if (isStartToFront) {
        return {post: null}
    }

    const response = await fetch('http://localhost:4200/posts/' + query.postId)
    const post = await response.json()

    return {
        serverPost: post
    }
}