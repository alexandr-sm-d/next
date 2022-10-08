import React from "react";
import Link from "next/link"
import Head from "next/head";
import MainLayout from "../layouts/MainLayout";

export default function Index() {
    return (
        <MainLayout>
            <Head>
                <title>Pet-project next.js</title>
            </Head>

            <h1>Hello, Next.js!</h1>
            <Link  href="/about"><a>About</a></Link>
            <a href="/posts">Posts</a>
            <Link  href="history//details">Details</Link>
        </MainLayout>
    )
}