import React from "react";
import Link from "next/link"
import Head from "next/head";

export default function Index() {
    return (
        <>
            <Head>
                <title>Pet-project next.js</title>
            </Head>

            <Link  href="/about"><a>About</a></Link>
            <a href="/posts">Posts</a>
            <Link  href="history//details">Details</Link>
            <h1>Hello, Next.js!</h1>
        </>
    )
}