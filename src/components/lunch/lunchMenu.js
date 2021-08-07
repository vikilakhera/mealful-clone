import React from 'react';
import Card from './card';
import "../common.css";

function LunchMenu () {
    return(
        <>
            <div className="menu-header">
                <div className="menu-heading">Lunch Menu</div>
                <div>
                    <button className="lunch-btn toggle">Lunch</button>
                    <button className="dinner-btn toggle">Dinner</button>
                </div>
            </div>
            <div className="menu-container">
                <Card />
            </div>
            <div className="menu-footer">
                <button className="request-btn">Request Menu Items</button>
            </div>
        </>
    )
}

export default LunchMenu;