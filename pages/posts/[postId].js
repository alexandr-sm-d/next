import {useRouter} from "next/router";
import React from "react";

export default function Post() {
    const {query} = useRouter()

    console.log('query', query)

    return <h1>Post {query.postId}</h1>
}