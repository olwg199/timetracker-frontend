import React, { useState } from 'react';

import styles from "./Dashboard.module.css";

export default function Dashboard({ children }) {
    const [isDashboardActive, setDashboardActive] = useState(true);

    const toggleDashboard = () => {
        setDashboardActive(!isDashboardActive);
    }

    return (
        <div className={isDashboardActive ? `${styles.dashboard} ${styles.active}` : `${styles.dashboard}`} onClick={toggleDashboard}>
            <button >X</button>
            {children ? children(toggleDashboard) : ""}
        </div>
    )
}
