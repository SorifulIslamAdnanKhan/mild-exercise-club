import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './Main.css';
import Card from '../Card/Card';
import Sidebar from '../Sidebar/Sidebar';


const Main = () => {

    const [cards, setCards] = useState([]);
    
    useEffect(() => {
        fetch('cards.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])


    return (
        <div className='container main-area'>
            <h2><span><FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon></span> Mild Exercise Club</h2>

            <div className="row">
                <div className="col-md-8">
                    <h3>Select Today’s Exercise</h3>
                    <div class="row g-4">
                        {
                            cards.map(card => <Card
                                key={card.id}
                                card={card}
                            ></Card>)
                        }
                    </div>     
                </div>
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
            </div>
            
        </div>
    );
};

export default Main;