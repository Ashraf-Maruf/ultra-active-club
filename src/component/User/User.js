import React, {useEffect, useState} from 'react';
import './User.css';
import img from '../../images/giphy.jpg'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import swal from "sweetalert";

const User = ({carts}) => {
    let times = 0;
    for (const cart of carts) {
        times = times + cart.time;
    }
    const [breakseconds, setBreakseconds] = useState(0);
    useEffect(() => {
        const breakseconds = JSON.parse(localStorage.getItem("breakseconds"));
        if (breakseconds) {
            setBreakseconds(breakseconds);
        }
    }, []);
    const handelAddToBreakTime = (secondsValue) =>{
        setBreakseconds(secondsValue);
        localStorage.setItem('breakseconds',secondsValue);
    }

    const handleActivity =()=>{
        swal({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success",
            button: "Yes",
        });
    }
    
    return (
        <div className="user-area  p-4">
            <div className="user pt-4">
                <div className="d-flex align-items-center justify-content-center">
                    <img className="me-3" src={img}/>
                    <div>
                        <h4>S.M.A. Ashraf</h4>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>
                            <p className="m-0 ms-2">Rajshahi,Bangladesh</p>
                        </div>
                    </div>
                </div>
                <div className="bg-warning p-3 mt-4 rounded-3 d-flex d-md-flex d-sm-flex justify-content-between justify-content-sm-between
                 justify-content-md-between justify-content-lg-between">
                    <div>
                        <h5>75<sup>kg</sup></h5>
                        <p>Weight</p>
                    </div>
                    <div>
                        <h5>6.5</h5>
                        <p>Height</p>
                    </div>
                    <div>
                        <h5>25<sub>yrs</sub></h5>
                        <p>Age</p>
                    </div>
                </div>
                <h5 className="mt-4 mb-3">Add A Break</h5>
                <div className="bg-warning rounded-3 p-3 d-flex justify-content-between d-md-flex d-sm-flex justify-content-sm-between justify-content-md-between">
                    <button className="btn btn-primary me-2" onClick={() => handelAddToBreakTime(10)}>10s</button>
                    <button className="btn btn-primary me-2" onClick={() => handelAddToBreakTime(20)}>20s</button>
                    <button className="btn btn-primary me-2" onClick={() => handelAddToBreakTime(30)}>30s</button>
                    <button className="btn btn-primary" onClick={() => handelAddToBreakTime(40)}>40s</button>
                </div>
                <h5 className="mt-4 mb-3">Exercise Details</h5>
                <div className="bg-warning rounded-3 p-3 exercise-details d-flex justify-content-lg-between">
                    <p className="m-0 text-black me-2">Exercise time</p>
                    <p className="m-0 text-black-50">{times} seconds</p>
                </div>
                <div className="bg-warning rounded-3 p-3 mt-3 exercise-details d-flex justify-content-lg-between">
                    <p className="m-0 text-black me-2">Break time</p>
                    <p className="m-0 text-black-50">{breakseconds} seconds</p>
                </div>
                <button className="btn btn-success w-100 mt-4" onClick={() => handleActivity()}>
                    <p className="text-white fw-bold m-0 p-2">Activity Completed</p>
                </button>
            </div>
        </div>
    );
};

export default User;
