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


const getStarRatings = (value) =>{
    const stars= [];
    const ratings = (value)=><span>
                    <i className={`gold ${getStar(value)}`}>
                    </i>
                </span>;
    while(value-->0){
        stars.push(ratings(value));
    }
   return stars; 
}

function Rating({value, numReviews}) {
    return (
        <div className="rating">
            {getStarRatings(value)}
        </div>
    )
}

export default Rating
