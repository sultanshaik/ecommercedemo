import React from 'react'
import {Link}  from 'react-router-dom';
import {Row, Col, Image, ListGroup, Button, Card, ListGroupItem} from 'react-bootstrap';

import {Rating} from '../components';
import products from '../products';


const ProductPage = ({match}) => {
    const product = products.find((p)=> p._id===match.params.id);
    return (
        <div>
            <Link to='/' className='btn btn-light my-3'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'> 
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>

                        <ListGroupItem>
                            <Rating value={product.rating} numReviews={product.numReviews} />
                        </ListGroupItem>
                    </ListGroup>    
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.countInStock > 0? 'In Stock': 'Out of Stock'}
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button className='btn-block' disabled={!product.countInStock}>Add to Cart</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
            {product.name}
        </div>
    )
}

export default ProductPage
