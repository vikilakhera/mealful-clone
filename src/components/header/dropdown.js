import React,{ useState } from 'react';
import users from '../img/users.svg';
import './header.css';

const Dropdown = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleActive = () =>{
        setIsActive(!isActive);
    };

    return(
        <div className="action">
            <div className="profile">
                <div className="dropdown" onClick={() => toggleActive()} >
                    <img width="40" height="40" src={users} alt="users"/>
                    <div className="user">Hello, Intern</div>
                    <i class="fa fa-caret-down"></i>
                </div>
                <div className={isActive ? "menu active" : "menu"}>
                    <ul>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Order History</a></li>
                        <li><a href="#">Get Free Meals</a></li>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;