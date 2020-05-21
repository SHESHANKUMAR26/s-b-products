import React from 'react';
import FontAwesome from 'react-fontawesome';


const Modal = (props) => {
    const { closeModal}= props;

    const closeicon = () => (
        <FontAwesome
        name="times"
        onClick={closeModal}
        style={{
            
            color:"black",
            cursor:"pointer",
            padding:"20px",
            backgroundColor:"grey",
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