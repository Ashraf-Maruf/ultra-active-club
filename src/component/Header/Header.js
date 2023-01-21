import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-9">
                    <div className="mt-5">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faDumbbell}></FontAwesomeIcon>
                            <h4 className="ms-2 text-balck fw-bold text-uppercase">Health Active Club</h4>
                        </div>
                        <h5 className="mt-3 mb-5">Select today's exercise</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
