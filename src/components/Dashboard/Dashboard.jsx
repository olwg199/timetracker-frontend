import User from 'components/UI/User/User';
import Navigation from 'components/UI/Navigation/Navigation';
import React, { useState } from 'react';
import logo from "./logo.svg";
import { Link } from "react-router-dom";
import Button from 'components/UI/Button/Button';

import styles from "./Dashboard.module.css";

export default function Dashboard({ children }) {
    const [isDashboardActive, setDashboardActive] = useState(true);

    const toggleDashboard = () => {
        setDashboardActive(!isDashboardActive);
    }

    return (
        <div className={isDashboardActive ? `${styles.dashboard} ${styles.active}` : `${styles.dashboard}`} onClick={toggleDashboard}>
            <div className={styles.dashboardControl}>
                <Link to="/" alt="Home page" className={styles.homeLink}>
                    <img src={logo} alt="Logo" />
                </Link>
                <Button href="#" classList={[styles.menuBtn]}>
                    {isDashboardActive ? <i className="fas fa-times"></i> : <i className="fad fa-bars"></i>}
                </Button>
            </div>

            <div className={styles.dashboardContent}>
                <User isDashboardActive={isDashboardActive} imgUrl="https://static01.nyt.com/images/2018/10/04/magazine/04blackhole1/04blackhole1-articleLarge-v3.jpg?quality=75&auto=webp&disable=upscale" />

                <Navigation />
            </div>
        </div>
    )
}
