import React from "react";
import Link from "next/link"

export default function MainLayout({children}) {
    return (
        <>
            <nav>
                <Link href={'about'}>About</Link>
                <Link href={'posts'}>Posts</Link>
                <Link href={'history/details'}>Details</Link>
            </nav>
            <main>
                {children}
            </main>
        </>
    )
}