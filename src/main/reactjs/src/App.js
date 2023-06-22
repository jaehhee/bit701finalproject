import './App.css';
import homin from './homin2.gif';
import homin2 from './homin5.gif';
import homin3 from './homin.gif';

function App() {

  const homin2Background = `url(${homin3})`;

  return (
    <div>
      <img alt='' src={homin} width={300} border="1"style={{marginTop:'170px'}} className="App-logo2"/>
      <br/>
      <h2 style={{marginTop:'135px', background: homin2Background}} className="App-logo2"> Docker 배포 성공 기원!!!</h2>
    </div>
  );
}

export default App;
