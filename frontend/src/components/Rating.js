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

const ratings = (value)=><span>
                    <i className={`gold ${getStar(value)}`}>
                    </i>
                </span>;
const ratingsEmpty = ()=><span>
    <i className={'gold far fa-star'}>
    </i>
</span>;

const getStarRatings = (value) =>{
    const stars= [];
    

    let emptystars = 5 - Math.ceil(value);
    while(value>0){
        stars.push(ratings(value--));
    }
    while(emptystars-->0){
        stars.push(ratingsEmpty());
    }
   return stars; 
}

function Rating({value, numReviews}) {
    return (
        <div className="rating">
            {getStarRatings(value)}
            <span>{`${numReviews} reviews`}</span>
        </div>
    )
}

export default Rating
