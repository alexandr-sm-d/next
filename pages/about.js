import React from "react";
import Router from "next/router";
import Link from "next/link";
import MainLayout from "../layouts/MainLayout";

export default function About() {

    const handleClick = () => Router.push('/')

    return (
        <MainLayout title={'About page Info'}>
            About page
            <button onClick={handleClick}>Home Page Button</button>
            <Link href={'/'}>Home Page Link</Link>
        </MainLayout>
    )
}