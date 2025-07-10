import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsLinkedin, BsEnvelope, BsGithub } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
      
        {name:'Linkedin', link:'https://www.linkedin.com/in/swati-gangwar-2599ab310', text:'Follow to my linkedin :'},
        {name:'GitHub', link:'https://github.com/swati-45', text:'Follow to my github account :'},
        {name:'Email', link:'mailto:swati.gangwar.che23@itbhu.ac.in',  text:'write to me a mail :'}
    ]
    return (
        <div className='contactWrap'>
        <Container>
            <Row>
                <Col>
                    <p>CONNECT WITH US</p>
                    <h1>Get in Touch</h1>
                </Col>
            </Row>
            <Row>
                <Col className='conectIcon'>
                    <ul className='socialIconsList'>
                       
                        <li>
                            <a rel="noreferrer" href="https://www.linkedin.com/in/swati-gangwar-2599ab310" target="_blank">
                                <BsLinkedin />
                            </a>
                        </li>
                        
                        <li>
                             <a href="mailto:swati.gangwar.che23@itbhu.ac.in" title="Send Email" >
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
            </Row>
            <Row>
                <Col>
                    <ListGroup className='contactList'>
                        {
                            myData && myData.length > 0 ? myData.map((item)=>{
                                return (
                                    <ListGroup.Item key={item.name}>
                                        <span>{item.text}</span>
                                        <a href={item.link} rel="noreferrer"  target="_blank">
                                            {item.link}
                                        </a>
                                    </ListGroup.Item>
                                )
                            }) : ''
                        }
                        
                    </ListGroup>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default ContactContainer;