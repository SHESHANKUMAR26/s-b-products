import React from 'react';
import FontAwesome from 'react-fontawesome';


const Modal = (props) => {
    const { closeModal}= props;

    const closeicon = () => (
        <FontAwesome
        name="times"
        onClick={closeModal}
        style={{
            color:"white",
            cursor:"pointer",
            padding:"20px",
            backgroundColor:"transparent",
            border:"1",
            position:'absolute',
            top:"0.3rem",
            right:"0.5rem",
        }}
        />
    );
    return(
        <div className="overlay">
            <div className="contents">
                {closeicon()}
                {props.children}
            </div>
        </div>
    );
};

export default Modal;