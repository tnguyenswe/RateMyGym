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
      <Link to="/reviews" state={{reviewName: "Toms Gym"}}> Reviews </Link> |{" "}
      <Link to="/gymBuddy">Gym Buddy Finder</Link>
    </div>
  );
}

export default App;
