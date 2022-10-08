import React from "react";
import Link from "next/link"

export default function MainLayout({children}) {
    return (
        <>
            <nav>
                <Link href={'about'}><a>About</a></Link>
                <Link href={'posts'}><a>Posts</a></Link>
                <Link href={'history/details'}><a>Details</a></Link>
            </nav>
            <main>
                {children}
            </main>

            <style jsx>
                {`
                    nav {
                        background: green;
                        display: flex;
                        align-items: center;
                        gap: 12px;
                        height: 2rem;
                        padding: 1rem;
                    }
                    
                    nav a {
                        color: white;
                        text-decoration: none;
                    }
                `}
            </style>
        </>
    )
}