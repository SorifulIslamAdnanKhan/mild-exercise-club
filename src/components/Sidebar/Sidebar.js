import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => {

    
    const { time } = props;
    //console.log(time);

    let exerciseTime = 0;
    for(const card of time){
        exerciseTime = parseFloat(exerciseTime + card.timeRequired);
        //console.log(exerciseTime);
    }

    return (
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
                    </div>
                </div>
                <div className="exercise-info">
                    <h4>Exercise Details</h4>
                    <p><b>Exercise Time: {exerciseTime.toFixed(2)}s</b></p>
                    <p><b>Break Time:</b></p>
                </div>
                <button className="btnm btn-warning activity">Activity Completed</button>
            </div>
        </div>
    );
};

export default Sidebar;