import NavBar from "./components/Navbar/navbar";
import Recipes from "./components/Recipes/Recipes";
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <NavBar/>
      <Container style={{ marginTop: '80px' }}>
        <Recipes/>
      </Container>
    </div>
  )
}

export default App;
