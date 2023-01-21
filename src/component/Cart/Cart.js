import React from 'react';
import './Cart.css'
const Cart = ({handleAddToList,clubcart}) => {
    const {picture,name,details,age,time} = clubcart;
    return (
        <div className="col">
            <div className="card h-100">
                <img className="p-3" src={picture}></img>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{details}</p>
                    <p className="age">For Age: {age}</p>
                    <p className="age">Time required: {time}s</p>
                </div>
                <button className="btn btn-primary rounded-0 rounded-bottom p-2" onClick={() => handleAddToList(clubcart)}>
                    <p className="m-0">Add to list</p>
                </button>
            </div>
        </div>
    );
};

export default Cart;
