/** @jsxImportSource theme-ui */
import NavBar from './components/NavBar';
import Body from './components/Body';
import { Link } from 'react-router-dom';

function App() {
  const reviewTest = {
    pathname: '/reviews',
    reviewName: 'Toms Gym',
  }

  return (
    <div className="App">
      <Body />
    </div>
  );
}

export default App;
