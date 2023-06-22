import './App.css';
import homin from './homin2.gif';
import homin3 from './homin.gif';

function App() {

  const homin2Background = `url(${homin3})`;

  return (
    <div className="App-logo2">
      <img alt='' src={homin} width={300} border="1"style={{marginTop:'170px'}}/>
      <h2 style={{marginTop:'135px', background: homin2Background}}> Docker 배포 성공 기원!!!</h2>
    </div>
  );
}

export default App;
