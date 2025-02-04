

import React, { useEffect } from 'react'
import { Container,Col, Row, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/thank-you.css'
import check from '../assets/images/checkmark.gif'
import Footer from '../components/footer/footer'


const ThankYou = () => {
    useEffect(()=>{
        window.scrollTo(0,0) 
       })
  return <>
    <section>
        <Container>
            <Row>
                <Col lg="12" className='pt-5 text-center'>
                    <div className='thank__you'>
                        <img src={check} alt=''/>
                        <h1 className='mb-3 fw-semibold'>Thank You</h1>
                        <h3 className='mb-4'>Your Tour is Booked .</h3>

                        <Button className='btn primary__btn'>
                            <Link to='/home'>Back to Home</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    <Footer />
    </>
}

export default ThankYou
