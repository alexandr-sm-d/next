import React from "react";
import Router from "next/router";
import Link from "next/link";

export default function About() {

    const handleClick = () => Router.push('/')

    return <>
        About page
        <button onClick={handleClick}>Home Page Button</button>
        <Link href={'/'}>Home Page Link</Link>
    </>
}