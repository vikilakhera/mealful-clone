import React from 'react';
import burrito from '../img/burrito.jpg'
import { lunchMenuInfo } from './lunchMenuInfo';
import '../common.css';

function Card () {
    return(
        <>
            {
                lunchMenuInfo.map(meal => {
                    return(
                        <div className="card-container fadeInUp">
                            <div className="img-container">
                                <img src={meal.image} alt={meal.name} />
                            </div>
                            <div className="img-info">
                                <div className="meal-name">{meal.name}</div>
                                <div className="by">by <strong>{meal.by}</strong></div>
                                <div className="btn-container">
                                    {
                                        meal.labels.map(label =>{
                                            return(
                                                <button className={`btn-info ${label}`}>{label}</button>
                                            )
                                        })
                                    }
                                </div>
                                <div className="meal-info">{meal.description}</div>
                                <button className="schedule-btn">Schedule Meal</button>
                            </div>
                        </div>
                    )
                })
            }
            {/* <div className="card-container">
                <div className="img-container">
                    <img src={burrito} alt="Smokehouse Burrito" />
                </div>
                <div className="img-info">
                    <div className="meal-name">Smokehouse Burrito</div>
                    <div className="by">by <strong>Freshii</strong></div>
                    <div className="btn-container">
                        <button className="info-btn veg">Vegeterian</button>
                        <button className="info-btn org">Organic</button>
                    </div>
                    <div className="meal-info">
                        Burrito with brown rice, aged cheddar, black beans, red onions, tomatoes, c...
                    </div>
                    <button className="schedule-btn">Schedule Meal</button>
                </div>
            </div> */}
        </>
    )
}

export default Card;