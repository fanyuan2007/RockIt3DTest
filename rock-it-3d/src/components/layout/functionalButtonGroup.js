import React from 'react';
import styles from './layout.module.css';

const FunctionalButtonGroup = (props) => {
    const onClickCam1Handler = (event) => {
        event.preventDefault();
        props.updateCameraPos({camId: 0});
    };

    const onClickCam2Handler = (event) => {
        event.preventDefault();
        props.updateCameraPos({camId: 1});
    };

    return (
        <>
            <button className={styles.event_button} onClick={onClickCam1Handler}>Update Camera 1 Viewport</button>
            <button className={styles.event_button} onClick={onClickCam2Handler}>Update Camera 2 Viewport</button>
        </>
    )
};

export default FunctionalButtonGroup;