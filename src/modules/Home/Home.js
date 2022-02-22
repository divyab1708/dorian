import { Container, Row, Col} from 'react-bootstrap';
import './home.scss'
function displayHomePage(){
    return(
        <div className='Home'>
            <Container fluid>
                <Row className='align-items-center fullHeight'>
                    <Col className='text-center' >
                        <h1>Welcome {localStorage.getItem('username')}</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    ) 
       
}

export default displayHomePage;