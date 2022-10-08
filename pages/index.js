import React from "react";
import Link from "next/link"

export default function Index() {
    return (
        <>
            <Link  href="/about"><a>About</a></Link>
            <a href="/posts">Posts</a>
            <Link  href="history//details">Details</Link>
            <h1>Hello, Next.js!</h1>
        </>
    )
}