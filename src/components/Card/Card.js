import React from 'react';
import './Card.css';

const Card = () => {
    return (
        <div className="row">
            <div className="col-md-8">
                <div class="row g-4">
                    <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card">
                            <img src="https://images.unsplash.com/photo-1601745398552-debacfca634c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p>Time Required: </p>
                                <button className='btn btn-warning text-white'>Add To List</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="col-md-4">
                <div class="row">
                    <div className="com-md-12">
                        <div className="personal-details">
                            <h4 className="name">Adnan Khan</h4>
                            <div className="physical-info">
                                <h4>64</h4>
                                <h4>5.4</h4>
                                <h4>30</h4>
                            </div>
                            <div className="physical-info">
                                <p>Weight</p>
                                <p>Height</p>
                                <p>Age</p>
                            </div>
                        </div>
                        <div className="break">
                            <h4>Add a Break</h4>
                            <div className="break-info">
                                <p>10s</p>
                                <p>20s</p>
                                <p>30s</p>
                                <p>40s</p>
                                <p>50s</p>
                                <p>60s</p>
                            </div>
                        </div>
                        <div className="exercise-info">
                            <h4>Exercise Details</h4>
                            <p><b>Exercise Time:</b></p>
                            <p><b>Break Time:</b></p>
                        </div>
                        <button className="btnm btn-warning activity">Activity Completed</button>
                    </div>
                </div>
            </div>
        </div>    
    );
};

export default Card;