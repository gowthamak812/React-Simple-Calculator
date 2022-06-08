 import Github from './images/Github.png';

import Buttons from './component/Buttons';
function App() {
  return (
    <div className='Main'>
      <h1 style={{marginLeft: 70}}>Calculator<span><a target={'_blank'} href="https://github.com/gowthamak812/React-Simple-Calculator.git"><img style={{ width: 40 }} src={Github} /></a></span></h1>       
      <div className='color'>
      <Buttons />
      </div>
    </div>
  );
}

export default App;
