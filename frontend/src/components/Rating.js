import React from 'react'
import '../styles/components/rating.scss';


const getStar= (value) =>{
    if(value>=1)
    return 'fas fa-star'
    else if (value>=0.5)
    return 'fas fa-star-half-alt'
    else
    return '';
}

function Rating({value, numReviews}) {
    return (
        <div className="rating">
            <span>
                <i className={`gold ${getStar(value)}`}>
                </i>
            </span>
            
        </div>
    )
}

export default Rating
