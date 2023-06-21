import logo from './logo.svg';
import './App.css';
import homin from './homin2.gif';

function App() {
  return (
    <div className="App">
      <img alt='' src={homin} width={300} border="1" className='App-logo' style={{marginTop:'170px'}}/>
      <br></br>
      <h2 style={{marginTop:'135px'}} className='App-logo' > Docker 배포 성공 기원!!!</h2>
    </div>
  );
}

export default App;
