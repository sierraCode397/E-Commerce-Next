import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import styles from "@styles/NotFound.module.scss";

const NotFound = () => {
    return (
        <>
			<Head>
			    <title>NotFound</title>
			</Head>
            <div className={styles['container-notFound']}>
                <h1 className={styles["title-404"]}>404</h1>
                <p className={styles["text-404"]}>Oops! Pagina no encontrada.</p>
                <Link href="/" className={styles["button-404"]}>Regrese a la página inicial, es mejor</Link>
            </div>
        </>
    );
};

export default NotFound;
