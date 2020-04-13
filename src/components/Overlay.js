import React from 'react';
import '../style/Overlay.css';

const Overlay = props => <div
    className="overlay"
    style={{ display: props.show ? 'block' : 'none',}}
    onClick = {props.clicked}></div>;

export default Overlay;