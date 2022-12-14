import logo from './logo.svg';
import './App.css';
import styled, {keyframes} from 'styled-components'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Line>
        <PictureCPY src='elena.png'/>
        <Picture src='kurwa.JPG' />
        </Line>
        <h1 style={{fontSize: '100px'}}> Głupia Kurwa</h1>
      </header>
    </div>
  );
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  flex-direction: column;
`
const Picture= styled.img`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  width: 150px;
`;
const PictureCPY= styled.img`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  width: 200px;
  height: 240px;
`;




export default App;
