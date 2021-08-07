import React from 'react';
import mealful from '../img/mealful.svg';
import Dropdown from './dropdown';

function Header() {
    return(
        <div className="header-container">
            <div className="logo">
                <a href="#"><img height="38" width="121" src={mealful} alt="mealful logo" /></a>
            </div>
            <div className="nav-menu">
                <a href="#">Buy Meal Plan</a>
                <a className="schedule-meals" href="#">Schedule Meals</a>
                <a href="#">Upcoming</a>
                <Dropdown />
            </div>
        </div>
    )
}

export default Header;