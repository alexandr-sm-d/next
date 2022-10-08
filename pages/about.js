import React from "react";
import Router from "next/router";
import Link from "next/link";
import Head from "next/head";

export default function About() {

    const handleClick = () => Router.push('/')

    return <>
        <Head>
            <title>About Page</title>
        </Head>

        About page
        <button onClick={handleClick}>Home Page Button</button>
        <Link href={'/'}>Home Page Link</Link>
    </>
}