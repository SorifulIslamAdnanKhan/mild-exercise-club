import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Main.css';
import Card from '../Card/Card';


const Main = () => {
    return (
        <div className='container main-area'>
            <h3><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Mild Exercise Club</h3>
            <Card></Card>
        </div>
    );
};

export default Main;