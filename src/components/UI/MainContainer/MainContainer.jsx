import React from 'react';

import styles from "./MainContainer.module.css";

export default function MainContainer({ children }) {
    return (
        <main className={styles.mainContainer}>
            <div className={`${styles.circle} ${styles.circleLB}`}></div>
            <div className={`${styles.circle} ${styles.circleRT}`}></div>
            <div className={styles.glassContainer}>
                {children}
            </div>
        </main>
    )
}
