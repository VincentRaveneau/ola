import logo from './logo.svg';
import './App.css';
import styled, {keyframes} from 'styled-components'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Picture src='kurwa.JPG' />
        <h1 style={{fontSize: '100px'}}> Głupa Kurwa</h1>
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
const Picture= styled.img`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 5px;
  width: 300px;
`;




export default App;
