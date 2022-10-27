import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

import LeftSide from '../../shared/LeftSide/LeftSide';


const Courses = () => {

    return (
        <div className=''>
            <Container fluid>
                <Row className=''>
                    <Col lg='4'>
                        <LeftSide></LeftSide>
                    </Col>
                    <Col lg='8'>
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Courses;