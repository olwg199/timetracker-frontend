import React from 'react';

import styles from "./User.module.css";

export default function User({ imgUrl, isDashboardActive }) {

    return (
        <div className={isDashboardActive ? `${styles.userCard} ${styles.active}` : `${styles.userCard}`}>
            {
                imgUrl ?
                    <img src={imgUrl} alt="User" className={`${styles.userCardImg}`} />
                    :
                    <i className={`far fa-user-circle ${styles.userCardImg}`}></i>
            }

            {/* <div className={styles.userCardName}>Oleh Yastrebov</div> */}
        </div >
    )
}
