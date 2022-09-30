import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Sidebar = (props) => {
    const { time } = props;
    let exerciseTime = 0;
    for(const card of time){
        exerciseTime = parseFloat(exerciseTime + card.timeRequired);
    }

    const [sec, setSec] = useState(0);

    useEffect(() => {
        const sec = localStorage.getItem('time');
        if (sec) {
            setSec(sec);
        }   
    }, [sec]);

    const breakTime = (time) => {
        localStorage.setItem('time', time);
        setSec(time);
    }

    const toastMessage = () =>{
        toast.success("Your activity completed successfully!");
    }

    return (
        <div className="row">
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
                        <button onClick={() => breakTime(10)} className="btn btn-warning text-white">10</button>
                        <button onClick={() => breakTime(20)} className="btn btn-warning text-white">20</button>
                        <button onClick={() => breakTime(30)} className="btn btn-warning text-white">30</button>
                        <button onClick={() => breakTime(40)} className="btn btn-warning text-white">40</button>
                        <button onClick={() => breakTime(50)} className="btn btn-warning text-white">50</button>
                    </div>
                </div>
                <div className="exercise-info">
                    <h4>Exercise Details</h4>
                    <p><b>Exercise Time: {exerciseTime.toFixed(2)}s</b></p>
                    <p><b>Break Time: {sec}s</b></p>
                </div>
                <button onClick={toastMessage} className="btn btn-warning activity">Activity Completed</button>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Sidebar;