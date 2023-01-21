import React, {useEffect, useState} from 'react';
import Cart from "../Cart/Cart";
import User from "../User/User";
import Header from "../Header/Header";

const Clubcart = () => {
    const [clubcards, setClubcard] = useState([])
    const [carts, setCarts] = useState([])
    useEffect(() =>{
        fetch('products.json')
            .then(res => res.json())
            .then(data => setClubcard(data))
    },)

    const handleAddToList = (clubcard) =>{
        const newCart = [...carts,clubcard];
        setCarts(newCart);
    }

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-9 col-lg-9">
                        <Header></Header>
                        <div className="row row-cols-1 row-cols-xl-3 row-cols-lg-2 row-cols-md-2 g-4 mb-4">
                            {
                                clubcards.map(clubcart => <Cart
                                    key = {clubcart.id}
                                    clubcart = {clubcart}
                                    handleAddToList = {handleAddToList}
                                ></Cart>)
                            }
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6">
                        <User carts={carts}></User>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clubcart;
