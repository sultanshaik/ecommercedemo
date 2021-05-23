import React, { useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row,Col } from 'react-bootstrap'

import {listProducts} from '../actions'
import {Product, Loader,Message} from '../components'

const HomePage = () => {
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.productsList)
    const {error, loading, products}  = productsList
    
    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch]);

    return (
        <div>
            <h1>Latest Products</h1>
            {loading? <Loader />
            :error ? <Message variant='danger'>{error}</Message>:
            <Row>
                {products ? products.map(product =>{
                    return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                }):''}
            </Row>}
        </div>
    )
}

export default HomePage
