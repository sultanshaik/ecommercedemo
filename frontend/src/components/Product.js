import React from 'react'
import { Card} from 'react-bootstrap'
import Rating from './Rating';

const Product = (props) => {
    const {product} = props
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${product._id}`}>
                <Card.Img src={product.image}>
                </Card.Img>
            </a>
            <Card.Body>
                <a href={`/product/${product._id}`}>
                    <Card.Title as='div'>
                        <strong>{product.name}</strong>
                    </Card.Title>
                </a>

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
