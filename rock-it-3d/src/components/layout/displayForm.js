import React, {useState} from 'react';

const MeshOptions = [
    "kitty",
    "mesh2"
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
        <form >
            <div>
                <label>Select Mesh:</label>
                <select 
                    style={{width:140, height:20}} 
                    onChange={onMeshSelectionChangeHandler}>
                    <option>kitty</option>
                    <option>mesh2</option>
                </select>
            </div>
            <div>
                <label>Position X:</label>
                <input value={xPosition} onChange={onXPositionChangeHandler}></input>
            </div>
            <div>
                <label>Position Y:</label>
                <input value={yPosition} onChange={onYPositionChangeHandler}></input>
            </div>
            <div>
                <label>Position Z:</label>
                <input style={{width: 80}} value={zPosition} onChange={onZPositionChangeHandler}></input>
            </div>
            <button style={{width: 80, height: 20}} onClick={onClickHandler}>Update</button>
        </form>
    );
};

export default DisplayForm;