import React, {useState} from 'react';
import styles from './layout.module.css';

const MeshOptions = [
    "Kitty",
    "Car"
];

const DisplayForm = (props) => {
    const [meshId, setMeshId] = useState(0);
    const [xPosition, setXPosition] = useState(0);
    const [yPosition, setYPosition] = useState(0);
    const [zPosition, setZPosition] = useState(0);

    const onClickHandler = (event) => {
        event.preventDefault();
        //console.log("values: ", meshId, xPosition, yPosition, zPosition);
        props.updatePosition({mId: meshId, xPos: xPosition, yPos: yPosition, zPos: zPosition});
    };

    const onMeshSelectionChangeHandler = (event) => {
        var selectedMeshId = event.target.value.localeCompare(MeshOptions[0]) == 0 ? 0 : 1;
        setMeshId(selectedMeshId);
    };

    const onXPositionChangeHandler = (event) => {
        setXPosition(event.target.value);
    };

    const onYPositionChangeHandler = (event) => {
        setYPosition(event.target.value);
    };

    const onZPositionChangeHandler = (event) => {
        setZPosition(event.target.value);
    };

    return (
        <form>
            <div className={styles.form_item}>
                <label className={styles.form_control_left}>Select Mesh:</label>
                <select className={styles.form_control_right}
                    onChange={onMeshSelectionChangeHandler}>
                    <option>Kitty</option>
                    <option>Car</option>
                </select>
            </div>
            <div className={styles.form_item}>
                <label className={styles.form_control_left}>Position X:</label>
                <input className={styles.form_control_right} value={xPosition} onChange={onXPositionChangeHandler}></input>
            </div>
            <div className={styles.form_item}>
                <label className={styles.form_control_left}>Position Y:</label>
                <input className={styles.form_control_right} value={yPosition} onChange={onYPositionChangeHandler}></input>
            </div>
            <div className={styles.form_item}>
                <label className={styles.form_control_left}>Position Z:</label>
                <input className={styles.form_control_right} value={zPosition} onChange={onZPositionChangeHandler}></input>
            </div>
            <button className={styles.form_button} onClick={onClickHandler}>Move</button>
        </form>
    );
};

export default DisplayForm;