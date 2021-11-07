import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Image, Card, Button, ListGroup, Form } from 'react-bootstrap';
import Rating from "../Components/Ratings";
import Message from "../Components/message"
import Loader from "../Components/loader"
import { listProductDetails } from "../actions/productActions"


export const ProductScreen = ({ history, match }) => {
    const [qty, setQty] = useState(1)
    
    const dispatch = useDispatch()
    
    const productDetail = useSelector(state => state.productDetails )
    const { product, loading, error } = productDetail
    
    useEffect(()=>{
        dispatch(listProductDetails(match.params.id))
    },[dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${qty}`)
    }

    console.log(product);

    return (
        <>
            <Link className="btn btn-dark my-3" to="/">Go Back </Link>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <>
               <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} review`}/> 
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: ${product.description}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={3} >
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Price:
                                    </Col>
                                    <Col>
                                    <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                    Status:
                                    </Col>
                                    <Col>
                                    <strong>{product.countInStock > 0 ? 'Instock' : "Out of Stock"}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                             {product.countInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Qty</Col>
                                        <Col>
                                            <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}>
                                                {[...Array(product.countInStock).keys()].map((x) => (
                                                    <option key={x+1} value={x+1}>
                                                        {x + 1}
                                                    </option>
                                                ))} 
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )} 


                            <ListGroup.Item>
                                <Row>
                                    <Button onClick={addToCartHandler}
                                    className='btn-block' types='button' disabled={product.countInStock === 0}>Add To Cart</Button>
                                </Row>                               
                            </ListGroup.Item>
                         </ListGroup>
                    </Card>
                </Col>

            </Row> 
            
            
            </>
            )
        }
        </>
    )
  
}


export default ProductScreen;