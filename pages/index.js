import React from "react";
import Link from "next/link"
import MainLayout from "../layouts/MainLayout";

export default function Index() {
    return (
        <MainLayout>
            <h1>Hello, Next.js!</h1>
            <Link  href="/about"><a>About</a></Link>
            <a href="/posts">Posts</a>
            <Link  href="history//details">Details</Link>
        </MainLayout>
    )
}