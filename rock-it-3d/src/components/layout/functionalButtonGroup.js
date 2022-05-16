import React from 'react';

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
        <div>
            <button onClick={onClickCam1Handler}>Update Camera 1 Viewport</button>
            <button onClick={onClickCam2Handler}>Update Camera 2 Viewport</button>
        </div>
    )
};

export default FunctionalButtonGroup;