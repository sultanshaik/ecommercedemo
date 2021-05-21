import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Row,Col } from 'react-bootstrap'

import {Product} from '../components'

const HomePage = () => {
    const [products, setProducts]  = useState([]);
    const getProducts = async ()=>{
        const {data} = await axios.get('/api/products')
        setProducts(data);
    }
    useEffect(()=>{
        getProducts();
    },[])
    return (
        <div>
            <h1>Latest Products</h1>
            <Row>
                {products ? products.map(product =>{
                    return <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />
                    </Col>
                }):''}
            </Row>
            
        </div>
    )
}

export default HomePage
