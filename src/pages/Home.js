import React, { useEffect } from 'react';
import NavbarBet from '../components/navbar';
import { Container, Row, Col } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeTable from '../components/HomeTable';
import { useDispatch, useSelector } from 'react-redux';
import { fetchClient } from '../Redux/ClientSlice';
import '../styling/Home.css'
function Home() {
    const Client1=useSelector(state=>state.ClientData.data)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchClient())
    },[dispatch])
    console.log( Client1)
    return (
        
        <>
            <NavbarBet />
            <Container id='countainer-Home' >
                <Row >
                    {/* Table Right */}
                    <Col className='table-rigth'>
                        <Card className='Card-Home'>
                            <Card.Title style={{ marginTop: '20px' }}>
                                <Link to='#' className='Card-Title'>
                                    مواعيد تسديد فواتير قريبه
                                </Link>
                            </Card.Title >
                            <hr />
                            <Card.Title >
                                <Link to='#' className='Card-Title'>
                                    مواعيد متأخره
                                </Link>
                            </Card.Title>
                            <hr />
                            <Card.Title >
                                <Link to='#' className='Card-Title'>
                                    أضافة عميل

                                </Link>
                            </Card.Title>
                            <hr />
                        </Card>
                    </Col>
                    {/* Table left */}
                    <Col xs={9} >
                        {/**********Profits *****************/}
                        <Container>
                            <h4 className='Header-title' style={{ marginTop: '40px' }}>  الارباح</h4>
                            <Row >
                                <Col md={4} >
                                    <Card id='daily-profits'>
                                        <Card.Title style={{ textAlign: 'rigth', paddingRight: '10px' }}
                                        >الارباح اليوميه
                                        </Card.Title>
                                        <Card.Title id='All-Profits'>
                                            مليون 1,000,000
                                        </Card.Title>
                                    </Card>
                                </Col>
                                <Col md={{ span: 4, offset: 4 }} >
                                    <Card id='daily-profits'>
                                        <Card.Title style={{ textAlign: 'rigth', paddingRight: '10px' }}
                                        >الارباح الشهريه
                                        </Card.Title>
                                        <Card.Title id='All-Profits'>
                                            مليون 5,000,000
                                        </Card.Title>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                        
                        <HomeTable Data={Client1} name='زبائن' />

                        <HomeTable Data={Client1} name='موردين' />

                        <HomeTable Data={Client1} name='تجار' />


                    </Col>


                </Row>

            </Container>




        </>
    )

}

export default Home;