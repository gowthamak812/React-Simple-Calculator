import Github from './images/Github.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
import Buttons from './component/Buttons';

export default function App() {
  return (
    <div className='main'>
      <Row className='justify-content-center ml-5 m-0'>
        <Col xs={4} className='main m-0'><h1>Calculator</h1></Col>
        <Col xs={4} className='m-0'>
          <a target={'_blank'} href="https://github.com/gowthamak812/React-Simple-Calculator.git">
            <img src={Github} />
          </a>
        </Col>
      </Row>
      <div className='btn-div'>
        <Buttons />
      </div>
    </div>
  );
}
