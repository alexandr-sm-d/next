import Link from "next/link";
import React from "react";
import styles from "../styles/error.module.css"
import MainLayout from "../layouts/MainLayout";

export default function Error() {
    return (
        <MainLayout title={'Page not found'}>
            <div className={styles.container}>
                <h3>404 error</h3>
                <p>Please, go back to <Link href={'/'}><a>Home Page Link</a></Link></p>
            </div>
        </MainLayout>
    )
}