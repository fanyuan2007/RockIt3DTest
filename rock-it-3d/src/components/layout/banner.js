import React from 'react';
import styles from './layout.module.css';

const Banner = () => {
    return (
        <div className={styles.banner}>
            <img alt={"banner"} src={"./assets/image/rockit3d.gif"} />
        </div>
    )
};

export default Banner;