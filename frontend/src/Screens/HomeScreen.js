import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from "react-bootstrap"
import Message from "../Components/message"
import Loader from "../Components/loader"
import Product from '../Components/Product'
import { listProducts } from '../actions/productActions';


const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    console.log(productList, "productList")
    const { loading, error, products } = productList

    useEffect(()=>{
        dispatch(listProducts())
    },[dispatch])

    // console.log(products);

    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> :  (   
             <Row>
                 {products.map((product) => 
                    // const { name, Image, description, brand, category, price } = product
                    (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>          
                            <Product  product={product}/>
                        </Col>
                    )
                )}
            </Row>
            )}          
        </>
    )
}

export default HomeScreen
