import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';
const AboutContainer = ()=>{

    return (
        <>
            <Container>
                <Row>
                    <Col className='pd50'>
                        <h2>About Page</h2>
                        <p>
                            Movie API Home Page Url :{" "}
                        <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer"  className="linkStyle">
                            https://www.themoviedb.org/
                        </a> 
                        
                        </p>
                        <p>
                            Movie API Key url :{" "}
                        <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer"  className="linkStyle">
                            https://www.themoviedb.org/documentation/api
                        </a>
                        </p>
                        <p>
                            Movie API Document Page Url :{" "}
                        <a href="https://www.themoviedb.org/documentation/api" target="_blank" rel="noopener noreferrer"  className="linkStyle">
                            https://www.themoviedb.org/documentation/api
                        </a>
                        </p>
                        <p>
                             React Bootstrap Page Url : {" "}
                        <a href="https://react-bootstrap.github.io/" target="_blank" rel="noopener noreferrer"  className="linkStyle">
                            https://react-bootstrap.github.io/
                        </a>
                        </p>
                        <p>
                            Bootstrap Icons Page Url  :{" "}
                        <a href="https://react-icons.github.io/react-icons/icons?name=bs" target="_blank" rel="noopener noreferrer"  className="linkStyle">
                            https://react-icons.github.io/react-icons/icons?name=bs
                        </a>
                        </p>
                        <p>
                             Axios Page Url :{" "}
                        <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer"  className="linkStyle">
                            https://www.npmjs.com/package/axios
                        </a>
                        </p>
                        <p>
                            React Pagination :{" "}
                        <a href="https://www.npmjs.com/package/react-paginate" target="_blank" rel="noopener noreferrer"  className="linkStyle">
                            https://www.npmjs.com/package/react-paginate
                        </a>
                        </p>
                        <p>
                            React Alice Carouse :{" "}
                        <a href="https://www.npmjs.com/package/react-alice-carousel" target="_blank" rel="noopener noreferrer"  className="linkStyle">
                            https://www.npmjs.com/package/react-alice-carousel
                        </a>
                        </p>

                        

                        


                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default AboutContainer;