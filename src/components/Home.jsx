import React, { useContext } from "react";
import data from "../data.js";
import { cartContext } from "../App.jsx";

const Home = () => {
    const { cart, setCart } = useContext(cartContext);

    const addCart = (item) => {
        setCart([...cart, item]);
    };

    const removeCart = (item) => {
        setCart(cart.filter(cartItem => cartItem.id !== item.id));
    };

    return (
        <ul className="names container">
            {data.map((item) => {
                const authorName = 
                    item.author.length > 25 
                    ? item.author.substring(0, 20) + "..." 
                    : item.author;

                return (
                    <div key={item.id} className="products">
                        <div className="product-details">
                            <div className="img">
                                <img src={item.img} alt={item.title} />
                            </div>
                            <div className="product-d">
                                <b>{item.title}</b>
                                <p>{authorName}</p> 
                                <p className="price">Price: ${item.price}</p> 
                            </div>

                            {cart.some(cartItem => cartItem.id === item.id) ? (
                                <div className="buttons">
                                    <button className="btn btn-danger w-100" onClick={() => removeCart(item)}>
                                        Remove from Cart
                                    </button>
                                </div>
                            ) : (
                                <div className="buttons" onClick={() => addCart(item)}>
                                    <button className="btn btn-success w-100">
                                        Add to Cart
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </ul>
    );
};

export default Home;
