import React from 'react'
import {Link} from 'react-router-dom'
import { Card} from 'react-bootstrap'
import Rating from './Rating';


const Product = (props) => {
    const {product} = props
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image}>
                </Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div className="my-3">
                        <Rating value={product.rating} numReviews={product.numReviews} />
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>    
    )
}

export default Product
