import './App.css';
import {Routes ,Route ,Link} from "react-router-dom"
import HomePage from './pages/Home';
import NewPage from './pages/New';
import ContactPage from './pages/Contact';
import Heading from './ComponentStyles/heading';
import Pagragap from './ComponentStyles/Pagragap';
import GlobalStyles from './ComponentStyles/GlobalStyles';
import Button from './component';

function App() {
  return (
    <div className="App">
      React Router
      <nav>
        <ul>
          <li>
            <Link to="/">
              <Button Home >Home</Button>
            </Link>
          </li>
          <li>
            <Link to="/New">
            <Button New>New</Button>
            </Link>
          </li>
          <li>
            <Link to="/Contact">
            <Button Contact>Contact</Button>
            </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/New'  element={<NewPage/>} />
        <Route  path='/Contact' element={<ContactPage/>} />
      </Routes>
      <hr></hr>
      css module
      <GlobalStyles>
        <div>
          <Heading/>
          <Pagragap/>
        </div>
        <div className='d-flex'>
          <div>item 1</div>
          <div>item 2</div>
        </div>
      </GlobalStyles>
      <Button primari/>
      <Button active/>
      <Button disable/>
      
    </div>
  );
}

export default App;
