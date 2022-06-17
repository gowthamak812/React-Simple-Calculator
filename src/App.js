import Github from './images/Github.png';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col } from 'react-bootstrap';
import Buttons from './component/Buttons';

export default function App() {
  return (
    <div className='main m-0'>
      <Row className='justify-content-center m-0'>
        <Col xs={8} md={8} lg={8} className='main m-2 ml-3'><h1>Calculator</h1></Col>
        <Col xs={2} md={2} lg={2} className='image-main'>
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
