import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

import { BsLinkedin, BsEnvelope, BsGithub } from "react-icons/bs";
const FooterComponent = ()=>{
    
    return (
        <>
            <footer className='myFooter'>
                <Container>
                   <Row>
                        <Col className=''>
                            <h3 className='head_3'>Follow us :- </h3>
                            <ul className='socialIconsList'>
                                <li>
                                    <a rel="noreferrer" href="https://www.linkedin.com/in/swati-gangwar-2599ab310" target="_blank">
                                        <BsLinkedin />
                                    </a>
                                </li>
                                <li>
                                    <a
                                    href="mailto:swati.gangwar.che23@itbhu.ac.in"
                                    title="Send Email"
                                         >
                              <BsEnvelope />
                              </a>
                                </li>
                                <li>
                                    <a rel="noreferrer" href="https://github.com/swati-45" target="_blank">
                                        <BsGithub />
                                    </a>
                                </li>
                            </ul>
                            
                        </Col>
                        <Col className='col-12'>
                            <div className="footerCopyright">
                                <small>© 2025 My Movies. All rights reserved.</small>
                            </div>
                        </Col>
                   </Row>
                </Container>
            </footer>
        </>
    )
}

export default FooterComponent;