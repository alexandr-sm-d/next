import MainLayout from "../../layouts/MainLayout";
import {useEffect, useState} from "react";

export default function Posts() {
    const [posts, setPosts] = useState([])
    const loadData = async () => {
        const response = await fetch('http://localhost:4200/posts')
        const data = await response.json()
        setPosts(data)
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <MainLayout title={'All posts'}>
            <h1>Posts</h1>
            <pre>
                {JSON.stringify(posts)}
            </pre>
        </MainLayout>
    )
}